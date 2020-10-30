import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Entidad } from '../../model/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  
  baseUrl = "http://localhost:8080//dynamic";
  userId: number = 1;
  tipoEntidad: number = 1;
  rubroId: number = 1;
  zonaId: number = 1;

  constructor(private http: HttpClient) { }
  
  getEntidadById(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.baseUrl}/entidades/${id}/documento`);
  }

  getEntidadByDocumento(document: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.baseUrl}/entidades/${document}/documento`);
  }
  
  create(entidad: Object): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(`${this.baseUrl}/user/${this.userId}/entidades`, entidad).pipe(
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
