import { Injectable } from '@angular/core';
import { DishDisplay } from '../models/dish.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes(): any {
    const dishes = this.http.get<any>('http://localhost:3500/api/v1/dishes');
    return dishes;
  }
  deleteDish() {}
  updateDish() {}
  createNewDish() {}
}
