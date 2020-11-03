import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cuenta } from "../../model/cuenta";

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  
  baseUrl = "http://localhost:8080//dynamic";

 
  constructor(private http: HttpClient) { }
  
  getCuentasdByEntidad(id: number): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.baseUrl}/entidad/${id}/cuentas`);
  }

  getCuentasdByEntidadAndCd(id: number, cd: string): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.baseUrl}/entidad/${id}/tipo/${cd}/cuentas`);
  }

  create(cuenta: Object, entidadId: number): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(`${this.baseUrl}/entidad/${entidadId}/cuentas`, cuenta).pipe(
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
