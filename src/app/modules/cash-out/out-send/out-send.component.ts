import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Cuenta } from 'src/app/model/cuenta';
import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';
import { CuentaService } from "src/app/services/model/cuenta.service";

@Component({
  selector: 'app-out-send',
  templateUrl: './out-send.component.html',
  styleUrls: ['./out-send.component.scss']
})
export class OutSendComponent implements OnInit {
 
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
    console.log(e);

  }

  changeOption(option: string) {
    this.service.operacion.entidadDestino = this.cuentas[0].entidad
    this.service.operacion.monto = this.operacion.monto;
    this.valueResponse.emit(option);

  }
}
