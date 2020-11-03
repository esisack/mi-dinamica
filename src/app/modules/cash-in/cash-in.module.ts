import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";
import { GoogleMapsModule } from "@angular/google-maps";

import { CashInComponent } from './cash-in.component';
import { InMethodsComponent } from './in-methods/in-methods.component';
import { InFlowComponent } from './in-flow/in-flow.component';
import { InTransferComponent } from './in-transfer/in-transfer.component';
import { InCardsComponent } from './in-cards/in-cards.component';
import { InApprovedComponent } from './in-approved/in-approved.component';
import { InConfirmComponent } from './in-confirm/in-confirm.component';

import { InAmountComponent } from './in-amount/in-amount.component';
import { RouterModule } from '@angular/router';
import { InLinkComponent } from './in-link/in-link.component';
import { InShowComponent } from './in-show/in-show.component';



@NgModule({
  declarations: [
    CashInComponent,
    InMethodsComponent,
    InFlowComponent,
    InTransferComponent,
    InCardsComponent,
    InApprovedComponent,
    InConfirmComponent,
    InAmountComponent,
    InLinkComponent,
    InShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    GoogleMapsModule
  ]
})
export class CashInModule { }
