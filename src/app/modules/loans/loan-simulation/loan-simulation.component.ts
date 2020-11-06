import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacion } from 'src/app/model/operacion';
import { Coeficiente } from "src/app/model/coeficiente";
import { LoansService } from 'src/app/services/loans.service';
import { CoeficienteService } from "src/app/services/model/coeficiente.service";


@Component({
  selector: 'app-loan-simulation',
  templateUrl: './loan-simulation.component.html',
  styleUrls: ['./loan-simulation.component.scss']
})
export class LoanSimulationComponent implements OnInit {
 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() option: string;
  @Input() method: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @Output() valueResponse2: EventEmitter<string> = new EventEmitter();

  operacion: Operacion;
  id: number = +sessionStorage.getItem('userId');

  operaciones: Operacion[] = [];
  coeficientes: Coeficiente[] = [];
  dataSource = new MatTableDataSource(this.coeficientes);
  displayedColumns: string[] = ['cuota', 'vencimiento',  'coeficiente', 'monto', 'acciones'];

  constructor(
      public service: LoansService,
      private coeficienteService: CoeficienteService
      ) {
    this.operacion = this.service.operacion;
    this.method = null
    console.log(this.operacion)
    this.coeficienteService.getCoeficientes().subscribe(data => {
      this.dataSource.data = data as Coeficiente[]
    })
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
