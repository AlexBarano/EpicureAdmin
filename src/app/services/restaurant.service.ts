import { Injectable } from '@angular/core';
import { RestaurantDisplay } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor() {}

  getRestaurants(): RestaurantDisplay[] {
    const arr: RestaurantDisplay[] = [];
    const res: RestaurantDisplay = {
      name: 'res',
      signatureDish: 'sig dish',
      image: 'image',
      isPopular: true,
      chef: 'Chef',
    };
    arr.push(res);
    return arr;
  }
  deleteRestaurant() {}
  updateRestaurant() {}
  createNewRestaurant() {}
}
