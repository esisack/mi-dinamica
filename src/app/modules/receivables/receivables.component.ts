import { Component, OnInit } from '@angular/core';

import { ReceivablesService } from "src/app/services/receivables.service";
import { Operacion } from 'src/app/model/operacion';

@Component({
  selector: 'app-receivables',
  templateUrl: './receivables.component.html',
  styleUrls: ['./receivables.component.scss']
})
export class ReceivablesComponent implements OnInit {
  
  option: string;
  operacion: Operacion;

  constructor(
    public service: ReceivablesService) { 
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
