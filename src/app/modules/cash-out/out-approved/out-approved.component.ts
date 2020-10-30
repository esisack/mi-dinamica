import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { CashOutService } from 'src/app/services/cash-out.service';

@Component({
  selector: 'app-out-approved',
  templateUrl: './out-approved.component.html',
  styleUrls: ['./out-approved.component.scss']
})
export class OutApprovedComponent implements OnInit {
 
  operacion: Operacion

  constructor(private service: CashOutService) {
    this.operacion = this.service.operacion;
   }


  ngOnInit(): void {
  }

}
