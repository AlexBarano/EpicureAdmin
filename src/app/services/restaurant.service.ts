import { Injectable } from '@angular/core';
import { RestaurantDisplay } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Promise<{ restaurants: RestaurantDisplay[] }> {
    const restaurants = firstValueFrom<{ restaurants: RestaurantDisplay[] }>(
      this.http.get<any>(`${environment.url}/restaurants`)
    );
    return restaurants;
  }
  deleteRestaurant(restaurant: RestaurantDisplay): Promise<void> {
    const restaurantStatus = firstValueFrom(
      this.http.delete<any>(`${environment.url}/restaurants/${restaurant._id}`)
    );
    return restaurantStatus;
  }
  updateRestaurant(restaurant: RestaurantDisplay): Promise<void> {
    const restaurantStatus = firstValueFrom(
      this.http.patch<any>(
        `${environment.url}/restaurants/${restaurant._id}`,
        restaurant
      )
    );
    return restaurantStatus;
  }
  createNewRestaurant(restaurant: RestaurantDisplay): Promise<void> {
    const restaurantStatus = firstValueFrom(
      this.http.post<any>(`${environment.url}/restaurants`, restaurant)
    );
    return restaurantStatus;
  }
}
