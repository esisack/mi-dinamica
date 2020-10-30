import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Entidad } from 'src/app/model/entidad';
import { Operacion } from 'src/app/model/operacion';
import { PayablesService } from 'src/app/services/payables.service';

@Component({
  selector: 'app-pay-services',
  templateUrl: './pay-services.component.html',
  styleUrls: ['./pay-services.component.scss']
})
export class PayServicesComponent implements OnInit {

  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  providers: Entidad[] = [];
  dataSource = new MatTableDataSource<Entidad>(this.providers);
  displayedColumns: string[] = ['entidadId', 'apellido', 'nombre', 'actions'];

  operSubscription: Subscription;
  operacion: Operacion;

  constructor(public service: PayablesService) {
    this.operacion = this.service.operacion;
    console.log(this.operacion)
  }

  ngOnInit(): void {
    this.getEmpresasServicio();
    this.dataSource.paginator = this.paginator;
  }


  changeOption(option: string) {
    this.service.operacion.monto = this.operacion.monto;
    this.valueResponse.emit(option);
  }

  public getEmpresasServicio() {
    let resp = this.service.getEntidades();
    resp.subscribe(report => this.dataSource.data = report as Entidad[]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



