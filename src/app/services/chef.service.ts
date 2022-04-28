import { Injectable } from '@angular/core';
import { ChefDisplay } from '../models/chef.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor(private http: HttpClient) {}

  getChefs(): Promise<{ chefs: ChefDisplay[] }> {
    const chefs = firstValueFrom<{ chefs: ChefDisplay[] }>(
      this.http.get<any>(`${environment.url}/chefs`)
    );
    return chefs;
  }
  deleteChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.delete<any>(`${environment.url}/chefs/${chef._id}`)
    );
    return chefStatus;
  }
  updateChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.patch<any>(`${environment.url}/chefs/${chef._id}`, chef)
    );
    return chefStatus;
  }
  createNewChef(chef: ChefDisplay): Promise<any> {
    const chefStatus = firstValueFrom(
      this.http.post<any>(`${environment.url}/chefs`, chef)
    );
    return chefStatus;
  }
}
