import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';

import { WalletService } from "src/app/services/wallet.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  id: number = +sessionStorage.getItem('userId');
  entidad: Entidad;
 
  constructor(private service: WalletService) {
    this.getEntidad();
   }

  ngOnInit(): void {
    //this.getEntidad();

  }

  getEntidad() {
    this.service.getEntidad(this.id).subscribe(data => {
      this.entidad = data;
    })
  }

}
