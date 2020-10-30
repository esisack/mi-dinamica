import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../material/material.module";
import { RouterModule } from '@angular/router';

import { LoansComponent } from './loans.component';

@NgModule({
  declarations: [LoansComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LoansModule { }
