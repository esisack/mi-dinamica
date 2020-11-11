import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})
export class AvailablesService {
  baseUrl = environment.baseUrl;
  
  operacion: Operacion;
  origenId: number = 1;
  destinoId: number = 136;

  constructor(private http: HttpClient) { }
}
