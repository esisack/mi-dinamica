import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { RegisterDataComponent } from './register/register-data/register-data.component';
import { RegisterSuccessComponent } from './register/register-success/register-success.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, RegisterDataComponent, RegisterSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AuthModule { }
