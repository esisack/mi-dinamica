import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { CashInService } from "src/app/services/cash-in.service";

@Component({
  selector: 'app-cash-in',
  templateUrl: './cash-in.component.html',
  styleUrls: ['./cash-in.component.scss']
})
export class CashInComponent implements OnInit {
  option: string;
  method: string;
  operacion: Operacion;

  constructor(private service: CashInService) { 
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
