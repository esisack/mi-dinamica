import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  option: string;
  operacion: Operacion;

  constructor(public service: LoansService) {  
    this.crearOperacion();
  }

  public ngOnInit() {

  }

  crearOperacion() {
    this.service.operacion = new Operacion();
    this.service.operacion.activo = "S";
    this.service.operacion.descripcion = "Adelanto de liquidaciones";
    this.service.operacion.monto = 0;
    this.service.operacion.operacionFecha = new Date();
  }
}
