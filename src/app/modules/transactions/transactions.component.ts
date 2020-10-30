import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacion } from 'src/app/model/operacion';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  id: number = parseInt(sessionStorage.getItem('userId'));

  operaciones: Operacion[] = [];
  dataSource = new MatTableDataSource(this.operaciones);
  displayedColumns: string[] = ['operacionId', 'operacionFecha', 'tipoOperacion', 'entidadDestino', 'monto'];

  constructor(private service: TransactionsService) { }

  ngOnInit(): void {
    this.getMisOperaciones();
  }

  getMisOperaciones() {
    let resp = this.service.getOperaciones(this.id);
    resp.subscribe(report=> this.dataSource.data = report as Operacion[])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
