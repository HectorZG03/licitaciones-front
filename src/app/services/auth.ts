import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  token: string;
  username: string;
  rol: 'MAESTRO' | 'USUARIO';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:9090/auth';

  constructor(private http: HttpClient) {}

  login(nombreusuario: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.API_URL}/login`, { nombreusuario, password })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username);
          localStorage.setItem('rol', res.rol);
        })
      );
  }

  logout(): void {
    localStorage.clear();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getLoggedUser(): string {
    return localStorage.getItem('username') ?? '';
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getHomeRouteByRole(): string {
    const rol = this.getRol();
    if (rol === 'MAESTRO') return '/home-maestro';
    if (rol === 'USUARIO') return '/home-usuario';
    return '/login';
  }
}