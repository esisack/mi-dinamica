import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Coeficiente } from '../../model/coeficiente';

@Injectable({
  providedIn: 'root'
})
export class CoeficienteService {
  baseUrl = environment.baseUrl;
  

 
  constructor(private http: HttpClient) { }
  
  getCoeficientes(): Observable<Coeficiente[]> {
    return this.http.get<Coeficiente[]>(`${this.baseUrl}/coeficientes`);
  }


}
