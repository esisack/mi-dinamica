import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Operacion } from "../../model/operacion";

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  
  baseUrl = "http://localhost:8080//dynamic";
 
  operacion: Operacion;
  parameters: Array<any>[];
  tipoOpoeracion: number = 1;
  origenId: number = 1;
  destinoId: number = 136;
  metodoPagoId: number = 1;

  constructor(private http: HttpClient) { }


  getOperacionByEntidad(entidadId: number): Observable<Operacion[]> {
    return this.http.get<Operacion[]>(`${this.baseUrl}/origen/${entidadId}/operaciones`);

  } 

  getVentasByEntidad(entidadId: number, codigo: string): Observable<Operacion[]> {
    return this.http.get<Operacion[]>(`${this.baseUrl}/origen/${entidadId}/${codigo}/ventas`);

  } 

  create(operacion: Object): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(`${this.baseUrl}/origen/${this.origenId}/operaciones`, operacion).pipe(
      catchError(this.handleError));
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
