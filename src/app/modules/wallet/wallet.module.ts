import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";

import { WalletComponent } from './wallet.component';
import { PendingComponent } from './pending/pending.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WalletComponent,
    PendingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
    
  ]
})
export class WalletModule { }
