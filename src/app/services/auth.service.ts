import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:8080/dynamic";
 
  user: User;

  constructor(private http: HttpClient) { }  

  authenticate(username, password) {
    this.getUserByMail(username, password).subscribe(data => {
      this.user = data;
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('userId', this.user.userId.toString())
      sessionStorage.setItem('entidadId', this.user.entidad.entidadId.toString())
      console.log(sessionStorage.getItem('username'))
      return true;
    });
    if (username === this.user.email && password === this.user.password) {}
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  getUserByMail(mail: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${mail}/${password}`);
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
