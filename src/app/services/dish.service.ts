import { Injectable } from '@angular/core';
import { DishDisplay } from '../models/dish.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DishService {
  constructor(private http: HttpClient) {}

  getDishes(): Promise<{ dishes: DishDisplay[] }> {
    const dishes = firstValueFrom<{ dishes: DishDisplay[] }>(
      this.http.get<any>('http://localhost:3500/api/v1/dishes')
    );
    return dishes;
  }
  getDishesOfRestaurant(
    restaurantId: string
  ): Promise<{ dishes: DishDisplay[] }> {
    const dishes = firstValueFrom<{ dishes: DishDisplay[] }>(
      this.http.get<any>(
        `http://localhost:3500/api/v1/dishes/restaurant/${restaurantId}`
      )
    );
    return dishes;
  }
  deleteDish(dish: DishDisplay): Promise<void> {
    const dishStatus = firstValueFrom(
      this.http.delete<any>(`http://localhost:3500/api/v1/dishes/${dish._id}`)
    );
    return dishStatus;
  }
  updateDish(dish: DishDisplay): Promise<void> {
    const ingredients: string[] = dish.ingredients;
    const ing: string[] = ingredients[0].split(',');
    const dishStatus = firstValueFrom(
      this.http.patch<any>(`http://localhost:3500/api/v1/dishes/${dish._id}`, {
        ...dish,
        ingredients: ing,
      })
    );
    return dishStatus;
  }
  createNewDish(dish: DishDisplay): Promise<void> {
    const dishStatus = firstValueFrom(
      this.http.post<any>(`http://localhost:3500/api/v1/dishes/`, dish)
    );
    return dishStatus;
  }
}
