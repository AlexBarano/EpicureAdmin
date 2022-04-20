import { Injectable } from '@angular/core';
import { RestaurantDisplay } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Promise<{ restaurants: RestaurantDisplay[] }> {
    const restaurants = firstValueFrom<{ restaurants: RestaurantDisplay[] }>(
      this.http.get<any>('http://localhost:3500/api/v1/restaurants')
    );
    return restaurants;
  }
  deleteRestaurant() {}
  updateRestaurant() {}
  createNewRestaurant() {}
}
