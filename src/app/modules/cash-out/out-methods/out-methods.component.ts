import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';

@Component({
  selector: 'app-out-methods',
  templateUrl: './out-methods.component.html',
  styleUrls: ['./out-methods.component.scss']
})
export class OutMethodsComponent implements OnInit {
 
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;

  constructor(public service: CashOutService) {
    this.operacion = this.service.operacion;
    console.log(this.operacion)
  }

  public ngOnInit() {
 
  }

  changeOption(option: string) {
    if (option === 'amount') {
      this.method = 'cash'
    } else {
      this.method = 'bank'
    }
  
    this.service.operacion.monto = this.operacion.monto;

    this.valueResponse.emit(option);
    this.valueResponse2.emit(this.method);

  }

}
