import { Injectable } from '@angular/core';
import { DishDisplay } from '../models/dish.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DishService {
  loading: boolean = false;
  constructor(private http: HttpClient) {}

  getDishes(): Promise<{ dishes: DishDisplay[] }> {
    const dishes = firstValueFrom<{ dishes: DishDisplay[] }>(
      this.http.get<any>('http://localhost:3500/api/v1/dishes')
    );
    return dishes;
  }
  deleteDish() {}
  updateDish() {}
  createNewDish() {}
}
