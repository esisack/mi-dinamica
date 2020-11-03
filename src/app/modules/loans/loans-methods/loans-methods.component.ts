import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';

import { LoansService } from "src/app/services/loans.service";
@Component({
  selector: 'app-loans-methods',
  templateUrl: './loans-methods.component.html',
  styleUrls: ['./loans-methods.component.scss']
})
export class LoansMethodsComponent implements OnInit {
  
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;

  constructor(public service: LoansService) {
    this.operacion = this.service.operacion;
    this.method = null
    console.log(this.operacion)
  }

  public ngOnInit() {
 
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);
    this.valueResponse2.emit(option);
  }
}
