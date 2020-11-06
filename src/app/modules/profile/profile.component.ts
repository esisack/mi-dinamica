import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/model/entidad';
import { EntidadService } from 'src/app/services/model/entidad.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number = +sessionStorage.getItem('userId');
  entidad: Entidad;
 
  constructor(private service: EntidadService) { }

  ngOnInit(): void {
    this.getCompany(12);
  }

  public getCompany( id: number) {
    let resp = this.service.getEntidad(this.id)
    resp.subscribe(data => this.entidad = data as Entidad);
  }

}
