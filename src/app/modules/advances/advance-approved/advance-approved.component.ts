import { Component, OnInit } from '@angular/core';
import { AdvancesService } from 'src/app/services/advances.service';

@Component({
  selector: 'app-advance-approved',
  templateUrl: './advance-approved.component.html',
  styleUrls: ['./advance-approved.component.scss']
})
export class AdvanceApprovedComponent implements OnInit {

  monto: number;
  constructor(private service: AdvancesService) {
    this.monto = this.service.operacion.monto;
   }

  ngOnInit(): void {
  }


}
