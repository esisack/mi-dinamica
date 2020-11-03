import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';

import { WalletService } from "src/app/services/wallet.service";
import { EntidadService } from "src/app/services/model/entidad.service";
import { OperacionService } from 'src/app/services/model/operacion.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  id: number =  +sessionStorage.getItem("entidadId");
  entidad: Entidad;
 
  constructor(
    private service: WalletService,
    private entidadService: EntidadService,
    private operacionService: OperacionService) {
    this.getEntidad();
   }

  ngOnInit(): void {
    //this.getEntidad();

  }

  getEntidad() {
    this.entidadService.getEntidad(this.id).subscribe(data => {
      this.entidad = data;
    })
  }

}
