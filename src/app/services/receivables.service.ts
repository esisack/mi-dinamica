import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Entidad } from '../model/entidad';
import { Operacion } from '../model/operacion';

@Injectable({
  providedIn: 'root'
})

export class ReceivablesService {

  baseUrl = environment.baseUrl;
  
  operacion: Operacion;
  origenId: number = 1;
  destinoId: number = 136;

  constructor(private http: HttpClient) { }


  nuevaOperacion(operacion: Object): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    console.log('llendo a return');
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


  getEntidadByDocument(document: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.baseUrl}/entidades/${document}/documento`);
  } 
  
}