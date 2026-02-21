import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:9090/auth/login';
  private loggedUser: string = '';

  constructor(private http: HttpClient) {}

  login(nombreusuario: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { nombreusuario, password }).pipe(
      tap(() => {
        this.loggedUser = nombreusuario;
      })
    );
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  logout() {
    this.loggedUser = '';
  }
}