import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChefService } from './chef.service';
import { RestaurantService } from './restaurant.service';
import { DishService } from './dish.service';

@Injectable({ providedIn: 'root' })
export class DisplayService {
  private display: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  constructor(
    private chefService: ChefService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  displayChefs() {
    // send chefs array
    // this.display.next('chefs');
  }
  displayRestaurants() {
    // send restaurants array
    // this.display.next('restaurants');
  }
  displayDishes() {
    // send dishes array
    // this.display.next('dishes');
  }
  getDisplay() {
    return this.display.asObservable();
  }
}
