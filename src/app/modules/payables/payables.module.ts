import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";

import { PayablesComponent } from './payables.component';
import { PayMethodsComponent } from './pay-methods/pay-methods.component';
import { PayQrComponent } from './pay-qr/pay-qr.component';
import { PayServicesComponent } from './pay-services/pay-services.component';
import { PayDebitsComponent } from './pay-debits/pay-debits.component';
import { PayValidationComponent } from './pay-validation/pay-validation.component';
import { PayConfirmComponent } from './pay-confirm/pay-confirm.component';
import { PayApprovedComponent } from './pay-approved/pay-approved.component';



@NgModule({
  declarations: [
    PayablesComponent,
    PayMethodsComponent,
    PayQrComponent,
    PayServicesComponent,
    PayDebitsComponent,
    PayValidationComponent,
    PayConfirmComponent,
    PayApprovedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ]
})
export class PayablesModule { }
