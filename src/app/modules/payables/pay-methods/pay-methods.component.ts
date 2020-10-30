import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Operacion } from 'src/app/model/operacion';
import { PayablesService } from "src/app/services/payables.service";

@Component({
  selector: 'app-pay-methods',
  templateUrl: './pay-methods.component.html',
  styleUrls: ['./pay-methods.component.scss']
})
export class PayMethodsComponent implements OnInit {
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();


  operSubscription: Subscription;
  operacion: Operacion;

  constructor(public service: PayablesService) {
    this.operacion = this.service.operacion;
    console.log(this.operacion)
  }

  public ngOnInit() {
 
  }

  changeOption(option: string) {
    this.service.operacion.monto = this.operacion.monto;
    this.valueResponse.emit(option);

  }
}
