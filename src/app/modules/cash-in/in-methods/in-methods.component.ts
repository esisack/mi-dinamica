import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Operacion } from 'src/app/model/operacion';
import { CashInService } from 'src/app/services/cash-in.service';

@Component({
  selector: 'app-in-methods',
  templateUrl: './in-methods.component.html',
  styleUrls: ['./in-methods.component.scss']
})
export class InMethodsComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();


  operSubscription: Subscription;
  operacion: Operacion;

  constructor(public service: CashInService) {
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
