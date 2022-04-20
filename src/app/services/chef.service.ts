import { Injectable } from '@angular/core';
import { ChefDisplay } from '../models/chef.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor(private http: HttpClient) {}

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  getChefs(): Observable<any> {
    const chefs = this.http.get<any>('http://localhost:3500/api/v1/chefs');
    return chefs;
  }
  deleteChef() {}
  updateChef() {}
  createNewChef() {}
}
