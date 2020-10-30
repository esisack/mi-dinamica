import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Operacion } from '../model/operacion';
import { Entidad } from '../model/entidad';

@Injectable({
  providedIn: 'root'
})
export class PayablesService {
  
  baseUrl = "http://localhost:8080//dynamic";
  operacion: Operacion = new Operacion();


  origenId: number = 1;
  destinoId: number = 136;

  constructor(private http: HttpClient) { }

  private _operacion = new Subject<Operacion>();
  operacion$ = this._operacion.asObservable();

  getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.baseUrl);
  }

}