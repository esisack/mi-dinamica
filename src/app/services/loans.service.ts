import { Injectable } from '@angular/core';
import { Operacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  baseUrl = "http://localhost:8080//dynamic";
  operacion: Operacion = new Operacion();
  
  constructor() { }

  
}
