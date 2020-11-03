import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { MatSelect } from '@angular/material/select';
import { Cuenta } from 'src/app/model/cuenta';
import { Operacion } from 'src/app/model/operacion';
import { CashInService } from 'src/app/services/cash-in.service';
import { CuentaService } from 'src/app/services/model/cuenta.service';

@Component({
  selector: 'app-in-cards',
  templateUrl: './in-cards.component.html',
  styleUrls: ['./in-cards.component.scss']
})
export class InCardsComponent implements OnInit {
  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  selectedOption: Cuenta;
  operacion: Operacion;
  cuentas: Cuenta[]
  currentSelected: any;

  constructor(public service: CashInService, private cuentaService: CuentaService) {
    this.operacion = this.service.operacion;
    this.getCuentasByEntidad(4);
    console.log(this.operacion)
  }
  
  public ngOnInit() {
  }

  getCuentasByEntidad(id: number) {
    this.cuentaService.getCuentasdByEntidad(id).subscribe(data => {
      this.cuentas = data
    })
  }

  onSelection(e, v) {
    this.service.operacion.entidadDestino = e.option.value.entidad;
    this.service.operacion.descripcion = e.option.value.descripcion;
    this.changeOption("amount")
    console.log(e.option.value);
    console.log(v);    
  }

  changeOption(option: string) {
    this.valueResponse.emit(option);

  }
}
