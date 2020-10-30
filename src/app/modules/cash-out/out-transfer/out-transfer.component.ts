import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cuenta } from 'src/app/model/cuenta';

import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';
import { CuentaService } from 'src/app/services/model/cuenta.service';

@Component({
  selector: 'app-out-transfer',
  templateUrl: './out-transfer.component.html',
  styleUrls: ['./out-transfer.component.scss']
})
export class OutTransferComponent implements OnInit {

  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  selectedOption: Cuenta;
  operacion: Operacion;
  cuentas: Cuenta[]

  constructor(public service: CashOutService, private cuentaService: CuentaService) {
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

  onChange(e, v) {
    // map these MatListOptions to their values
    console.log(v)
  }

 
  changeOption(option: string) {
    this.service.operacion.entidadDestino = this.cuentas[0].entidad
    this.service.operacion.monto = this.operacion.monto;
    this.valueResponse.emit(option);

  }
  
}
