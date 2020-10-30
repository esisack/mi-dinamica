import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/model/operacion';
import { ReceivablesService } from "src/app/services/receivables.service";

@Component({
  selector: 'app-rec-approved',
  templateUrl: './rec-approved.component.html',
  styleUrls: ['./rec-approved.component.scss']
})
export class RecApprovedComponent implements OnInit {

  operacion: Operacion;
  
  monto: number;
  constructor(private service: ReceivablesService) {
    this.operacion = this.service.operacion
   }

  ngOnInit(): void {
  }

}
