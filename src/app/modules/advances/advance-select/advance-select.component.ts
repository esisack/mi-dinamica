import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacion } from 'src/app/model/operacion';
import { AdvancesService } from "src/app/services/advances.service";

@Component({
  selector: 'app-advance-select',
  templateUrl: './advance-select.component.html',
  styleUrls: ['./advance-select.component.scss']
})
export class AdvanceSelectComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() option: string;
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();
  
  id: number = +sessionStorage.getItem('userId');
  operacion: Operacion;
  operaciones: Operacion[] = [];
  displayedColumns: string[] = ['select', 'operacionId', 'operacionFecha', 'tipoOperacion', 'entidadDestino', 'monto'];
  dataSource = new MatTableDataSource(this.operaciones);
  selection = new SelectionModel<Operacion>(true, []);
  expandedElement: Operacion | null;
  total: number;

  constructor(public service: AdvancesService) {
    this.getMisOperaciones();
    this.selection =  new SelectionModel<Operacion>(true, []);
   }

  ngOnInit(): void {
    console.log(this.id)
  }

  getMisOperaciones() {
    let resp = this.service.getOperaciones(this.id);
    resp.subscribe(report=> this.dataSource.data = report as Operacion[])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeOption(option: string) {
    this.service.operacion.monto = 12345;
    this.valueResponse.emit(option);
  }

  isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }
  masterToggle() {
     if(this.isAllSelected()){
             this.selection.clear();
             // this.isButtonEnable = true;
         }else{
             this.dataSource.data.forEach(row => this.selection.select(row));
             // this.isButtonEnable = false;
     }
 }

 public changeEvent(row?: Operacion){
  this.total = 0;
  this.total = this.selection.selected.reduce((prev, cur)=>{
   return prev + cur.monto;
  }, 0);
}
}
