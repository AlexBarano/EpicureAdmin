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
  deleteChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.delete<any>(`http://localhost:3500/api/v1/chefs/${chef._id}`)
    );
    return chefStatus;
  }
  updateChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.patch<any>(
        `http://localhost:3500/api/v1/chefs/${chef._id}`,
        chef
      )
    );
    return chefStatus;
  }
  createNewChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.post<any>(`http://localhost:3500/api/v1/chefs`, chef)
    );
    return chefStatus;
  }
}
