import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CashInComponent } from './modules/cash-in/cash-in.component';
import { CashOutComponent } from './modules/cash-out/cash-out.component';
import { HomeComponent } from './modules/home/home.component';
import { PayablesComponent } from './modules/payables/payables.component';
import { ReceivablesComponent } from './modules/receivables/receivables.component';
import { WalletComponent } from './modules/wallet/wallet.component';
import { LoansComponent } from "./modules/loans/loans.component";
import { AdvancesComponent } from "./modules/advances/advances.component";
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { AuthGuardService } from "./services/auth-guard.service";
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  {
  path: '',
  component: DefaultComponent,
  canActivate:[AuthGuardService],
  children: [{
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },{
    path: 'billetera',
    component: WalletComponent,
    canActivate:[AuthGuardService]
  },{
    path: 'actividad',
    component: TransactionsComponent,
    canActivate:[AuthGuardService]
  },{
    path: 'prestamos',
    component: LoansComponent
  },{
    path: 'adelantos',
    component: AdvancesComponent
  },{
    path: 'ingresar/dinero',
    component: CashInComponent
  },{
    path: 'retirar/dinero',
    component: CashOutComponent
  },{
    path: 'cobranzas',
    component: ReceivablesComponent
  },{
    path: 'pagos',
    component: PayablesComponent
  },{
    path: 'mi-perfil',
    component: ProfileComponent
  }
]
}, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
