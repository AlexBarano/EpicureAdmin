import { Injectable } from '@angular/core';
import { RestaurantDisplay } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): any {
    const restaurants = this.http.get<any>(
      'http://localhost:3500/api/v1/restaurants'
    );
    return restaurants;
  }
  deleteRestaurant() {}
  updateRestaurant() {}
  createNewRestaurant() {}
}
