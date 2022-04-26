import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Promise<any> {
    return firstValueFrom(
      this.http.post<any>('http://localhost:3500/api/v1/login', {
        email,
        password,
      })
    );
  }

  register(email: string, password: string): Promise<void> {
    return firstValueFrom(
      this.http.post<void>('http://localhost:3500/api/v1/register', {
        email,
        password,
      })
    );
  }
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }
  static getToken() {
    return localStorage.getItem('token') as string;
  }
}
