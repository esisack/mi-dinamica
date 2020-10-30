import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { PayablesService } from "src/app/services/payables.service";

@Component({
  selector: 'app-payables',
  templateUrl: './payables.component.html',
  styleUrls: ['./payables.component.scss']
})
export class PayablesComponent implements OnInit {
  
  option: string;
  operacion: Operacion;

  constructor(private service: PayablesService) { 
    this.crearOperacion();
  }

  public ngOnInit() {

  }

  crearOperacion() {
    this.service.operacion = new Operacion();
    this.service.operacion.activo = "S";
    this.service.operacion.descripcion = "";
    this.service.operacion.monto = 0;
    this.service.operacion.operacionFecha = new Date();

  }
  
}
