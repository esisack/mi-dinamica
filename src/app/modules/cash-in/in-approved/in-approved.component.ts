import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { CashInService } from 'src/app/services/cash-in.service';

@Component({
  selector: 'app-in-approved',
  templateUrl: './in-approved.component.html',
  styleUrls: ['./in-approved.component.scss']
})
export class InApprovedComponent implements OnInit {
  
  operacion: Operacion

  constructor(private service: CashInService) {
    this.operacion = this.service.operacion;
   }


  ngOnInit(): void {
  }

}
