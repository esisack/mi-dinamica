import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Operacion } from 'src/app/model/operacion';
import { OperacionService } from 'src/app/services/model/operacion.service';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  id: number = +sessionStorage.getItem('userId');

  operaciones: Operacion[] = [];

  constructor(private service: OperacionService) { }

  ngOnInit(): void {
    this.getOperaciones();
  }

  getOperaciones() {
    this.service.getVentasByEntidad(this.id, 'AR').subscribe(data => {
      this.operaciones = data
    })
  }

}
