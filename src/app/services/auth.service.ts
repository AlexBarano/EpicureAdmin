import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Promise<any> {
    return firstValueFrom(this.http.post('/api/v1/login', { email, password }));
  }
}
