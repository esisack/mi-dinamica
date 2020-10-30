import { Component, OnInit } from '@angular/core';

import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';

@Component({
  selector: 'app-cash-out',
  templateUrl: './cash-out.component.html',
  styleUrls: ['./cash-out.component.scss']
})
export class CashOutComponent implements OnInit {
  option: string;
  method: string;
  operacion: Operacion;

  constructor(private cashOutService: CashOutService) { 
    this.crearOperacion();
  }

  public ngOnInit() {

  }

  crearOperacion() {
    this.cashOutService.operacion = new Operacion();
    this.cashOutService.operacion.activo = "S";
    this.cashOutService.operacion.descripcion = "";
    this.cashOutService.operacion.monto = 0;
    this.cashOutService.operacion.operacionFecha = new Date();

  }
}