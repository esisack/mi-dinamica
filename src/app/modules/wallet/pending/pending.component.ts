import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource(this.operaciones);
  displayedColumns: string[] = ['operacionId', 'operacionFecha', 'tipoOperacion', 'entidadDestino', 'monto'];

  constructor(private service: OperacionService) { }

  ngOnInit(): void {
    this.getMisOperaciones();
  }

  getMisOperaciones() {
    let resp = this.service.getVentasByEntidad(this.id, "AR");
    resp.subscribe(report=> this.dataSource.data = report as Operacion[])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
