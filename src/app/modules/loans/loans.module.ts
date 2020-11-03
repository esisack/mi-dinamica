import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../material/material.module";
import { RouterModule } from '@angular/router';

import { LoansComponent } from './loans.component';
import { LoansMethodsComponent } from './loans-methods/loans-methods.component';

import { LoanMaturityComponent } from './loan-maturity/loan-maturity.component';
import { LoanSimulationComponent } from './loan-simulation/loan-simulation.component';
import { LoanAccessComponent } from './loan-access/loan-access.component';
import { LoanConfirmComponent } from './loan-confirm/loan-confirm.component';
import { LoanApproveComponent } from './loan-approve/loan-approve.component';
import { LoanAmountComponent } from './loan-amount/loan-amount.component';

@NgModule({
  declarations: [
    LoansComponent, 
    LoansMethodsComponent, 
    LoanMaturityComponent, 
    LoanSimulationComponent, 
    LoanAccessComponent, 
    LoanConfirmComponent, 
    LoanApproveComponent, LoanAmountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LoansModule { }
