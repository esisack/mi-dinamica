import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";

import { CashOutComponent } from './cash-out.component';
import { OutMethodsComponent } from './out-methods/out-methods.component';
import { OutConfirmComponent } from './out-confirm/out-confirm.component';
import { OutFlowComponent } from './out-flow/out-flow.component';
import { OutTransferComponent } from './out-transfer/out-transfer.component';
import { OutSendComponent } from './out-send/out-send.component';
import { OutApprovedComponent } from './out-approved/out-approved.component';
import { RouterModule } from '@angular/router';
import { OutAmountComponent } from './out-amount/out-amount.component';



@NgModule({
  declarations: [
    CashOutComponent,
    OutMethodsComponent,
    OutConfirmComponent,
    OutFlowComponent,
    OutTransferComponent,
    OutSendComponent,
    OutApprovedComponent,
    OutAmountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
    
  ]
})
export class CashOutModule { }
