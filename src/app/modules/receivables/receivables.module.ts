import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";
import { QRCodeModule } from 'angularx-qrcode';

import { ReceivablesComponent } from './receivables.component';
import { RecCodeComponent } from './rec-code/rec-code.component';
import { RecQrComponent } from './rec-qr/rec-qr.component';
import { RecLinkComponent } from './rec-link/rec-link.component';
import { RecValidationComponent } from './rec-validation/rec-validation.component';
import { RecConfirmComponent } from './rec-confirm/rec-confirm.component';
import { RecMethodsComponent } from './rec-methods/rec-methods.component';
import { RecApprovedComponent } from './rec-approved/rec-approved.component';
import { RouterModule } from '@angular/router';
import { RecAmountComponent } from './rec-amount/rec-amount.component';



@NgModule({
  declarations: [
    ReceivablesComponent,
    RecCodeComponent,
    RecQrComponent,
    RecLinkComponent,
    RecValidationComponent,
    RecConfirmComponent,
    RecMethodsComponent,
    RecApprovedComponent,
    RecAmountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QRCodeModule,
    MaterialModule
    
  ]
})
export class ReceivablesModule { }
