import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: number = +sessionStorage.getItem("entidadId");

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pago Edese', weight: 1240, symbol: 'H'},
  {position: 2, name: 'Pago Gasnor', weight: 1025, symbol: 'He'},
  {position: 3, name: 'Pago Personal', weight: 6941, symbol: 'Li'},
  {position: 4, name: 'Pago Cable Expres', weight: 2124, symbol: 'Be'},
  {position: 5, name: 'Pago cuota Dinamica', weight: 1100, symbol: 'B'},
  {position: 1, name: 'Pago Edese', weight: 1240, symbol: 'H'},
  {position: 2, name: 'Pago Gasnor', weight: 1025, symbol: 'He'},
  {position: 3, name: 'Pago Personal', weight: 6941, symbol: 'Li'},
  {position: 4, name: 'Pago Cable Expres', weight: 2124, symbol: 'Be'},
  {position: 5, name: 'Pago cuota Dinamica', weight: 1100, symbol: 'B'},
  {position: 1, name: 'Pago Edese', weight: 1240, symbol: 'H'},
  {position: 2, name: 'Pago Gasnor', weight: 1025, symbol: 'He'},
  {position: 3, name: 'Pago Personal', weight: 6941, symbol: 'Li'},
  {position: 4, name: 'Pago Cable Expres', weight: 2124, symbol: 'Be'},
  {position: 5, name: 'Pago cuota Dinamica', weight: 1100, symbol: 'B'},
  {position: 1, name: 'Pago Edese', weight: 1240, symbol: 'H'},
  {position: 2, name: 'Pago Gasnor', weight: 1025, symbol: 'He'},
  {position: 3, name: 'Pago Personal', weight: 6941, symbol: 'Li'},
  {position: 4, name: 'Pago Cable Expres', weight: 2124, symbol: 'Be'},
  {position: 5, name: 'Pago cuota Dinamica', weight: 1100, symbol: 'B'},
  ];