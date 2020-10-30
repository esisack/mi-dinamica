import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';
import { Operacion } from 'src/app/model/operacion';
import { ReceivablesService } from 'src/app/services/receivables.service';

@Component({
  selector: 'app-rec-validation',
  templateUrl: './rec-validation.component.html',
  styleUrls: ['./rec-validation.component.scss']
})
export class RecValidationComponent implements OnInit {

  operacion: Operacion;
  entidad: Entidad;

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor(public service: ReceivablesService) { 
    this.operacion = this.service.operacion;

  }

  ngOnInit(): void {
    console.log(this.operacion.monto)
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);

  }
}
