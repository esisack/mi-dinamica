import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../material/material.module";
import { TransactionsComponent } from './transactions.component';



@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
