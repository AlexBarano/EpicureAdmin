import { Injectable } from '@angular/core';
import { ChefDisplay } from '../models/chef.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor(private http: HttpClient) {}

  getChefs(): Promise<{ chefs: ChefDisplay[] }> {
    const chefs = firstValueFrom<{ chefs: ChefDisplay[] }>(
      this.http.get<any>('http://localhost:3500/api/v1/chefs')
    );
    return chefs;
  }
  deleteChef() {}
  updateChef() {}
  createNewChef() {}
}
