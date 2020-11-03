import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/model/entidad.service';

@Component({
  selector: 'app-in-transfer',
  templateUrl: './in-transfer.component.html',
  styleUrls: ['./in-transfer.component.scss']
})
export class InTransferComponent implements OnInit {

  cbu: string = "0007 0401 1779 2147";
  alias: string = "MONO.MANO.MINO";

  constructor(private service: EntidadService) {

   }

  ngOnInit(): void {
  }

}
