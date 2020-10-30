import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../material/material.module";

import { ProfileComponent } from './profile.component';
import { DataComponent } from './data/data.component';
import { VendorsComponent } from './vendors/vendors.component';
import { BranchesComponent } from './branches/branches.component';
import { AddressComponent } from './address/address.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    ProfileComponent, 
    DataComponent, 
    VendorsComponent, 
    BranchesComponent, 
    AddressComponent, 
    AccountsComponent, 
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProfileModule { }
