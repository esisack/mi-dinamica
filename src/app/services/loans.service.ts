import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  baseUrl = environment.baseUrl;

  operacion: Operacion = new Operacion();
  
  constructor() { }

  
}
