import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

import { AdvancesComponent } from './advances.component';
import { AdvanceConfirmComponent } from './advance-confirm/advance-confirm.component';
import { AdvanceApprovedComponent } from './advance-approved/advance-approved.component';
import { AdvanceSelectComponent } from './advance-select/advance-select.component';

@NgModule({
  declarations: [
    AdvancesComponent,
    AdvanceConfirmComponent,
    AdvanceApprovedComponent,
    AdvanceSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdvancesModule { }
