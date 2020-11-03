import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacion } from 'src/app/model/operacion';
import { AdvancesService } from "src/app/services/advances.service";

@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {
  
  option: string;
  operacion: Operacion;

  constructor(public service: AdvancesService) {  this.crearOperacion();
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
