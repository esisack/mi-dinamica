import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../material/material.module";


import { AvailablesModule } from "./availables/availables.module";
import { AdvancesModule } from "./advances/advances.module";
import { CashInModule } from "./cash-in/cash-in.module";
import { CashOutModule } from "./cash-out/cash-out.module";
import { HomeModule } from "./home/home.module";
import { LoansModule } from "./loans/loans.module";
import { PayablesModule } from "./payables/payables.module";
import { ProfileModule } from "./profile/profile.module";
import { ReceivablesModule } from "./receivables/receivables.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { WalletModule } from "./wallet/wallet.module";




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AvailablesModule,
    AdvancesModule,
    CashInModule,
    CashOutModule,
    HomeModule,
    LoansModule,
    PayablesModule,
    ProfileModule,
    ReceivablesModule,
    TransactionsModule,
    WalletModule
  ]
})
export class ModulesModule { }
