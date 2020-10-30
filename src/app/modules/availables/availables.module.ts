import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material/material.module";

import { AvailablesComponent } from './availables.component';



@NgModule({
  declarations: [
    AvailablesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ]
})
export class AvailablesModule { }
