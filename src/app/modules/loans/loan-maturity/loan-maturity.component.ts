import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacion } from 'src/app/model/operacion';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loan-maturity',
  templateUrl: './loan-maturity.component.html',
  styleUrls: ['./loan-maturity.component.scss']
})
export class LoanMaturityComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  id: number = +sessionStorage.getItem('userId');

  operaciones: Operacion[] = [];
  dataSource = new MatTableDataSource(this.operaciones);
  displayedColumns: string[] = ['operacionId', 'operacionFecha', 'tipoOperacion', 'entidadDestino', 'monto'];

  constructor(public service: LoansService) {
    this.operacion = this.service.operacion;
    this.method = null
    console.log(this.operacion)
  }

  public ngOnInit() {
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  changeOption(option: string) {
    this.valueResponse.emit(option);
    this.valueResponse2.emit(option);
  }
}
