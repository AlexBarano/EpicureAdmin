import { Injectable } from '@angular/core';
import { DishDisplay } from '../models/dish.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes(): Promise<{ dishes: DishDisplay[] }> {
    const dishes = firstValueFrom<{ dishes: DishDisplay[] }>(
      this.http.get<any>(`${environment.url}/dishes`)
    );
    return dishes;
  }
  getDishesOfRestaurant(
    restaurantId: string
  ): Promise<{ dishes: DishDisplay[] }> {
    const dishes = firstValueFrom<{ dishes: DishDisplay[] }>(
      this.http.get<any>(`${environment.url}/dishes/restaurant/${restaurantId}`)
    );
    return dishes;
  }
  deleteDish(dish: DishDisplay): Promise<void> {
    const dishStatus = firstValueFrom(
      this.http.delete<any>(`${environment.url}/dishes/${dish._id}`)
    );
    return dishStatus;
  }
  updateDish(dish: DishDisplay): Promise<void> {
    const ingredients: string[] = dish.ingredients;
    const ing: string[] = ingredients[0].split(',');
    const dishStatus = firstValueFrom(
      this.http.patch<any>(`${environment.url}/dishes/${dish._id}`, {
        ...dish,
        ingredients: ing,
      })
    );
    return dishStatus;
  }
  createNewDish(dish: DishDisplay): Promise<void> {
    const ingredients: string[] = dish.ingredients;
    const ing: string[] = ingredients[0].split(',');
    const dishStatus = firstValueFrom(
      this.http.post<any>(`${environment.url}/dishes/`, {
        ...dish,
        ingredients: ing,
      })
    );
    return dishStatus;
  }
}
