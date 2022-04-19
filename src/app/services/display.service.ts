import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChefService } from './chef.service';
import { RestaurantService } from './restaurant.service';
import { DishService } from './dish.service';
import { ChefDisplay } from '../models/chef.model';
import { RestaurantDisplay } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class DisplayService {
  private display: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor(
    private chefService: ChefService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  displayChefs() {
    // send chefs array
    // this.display.next('chefs');
    const chefs: ChefDisplay[] = this.chefService.getChefs();
    this.display.next(chefs);
  }
  displayRestaurants() {
    // send restaurants array
    // this.display.next('restaurants');
    const restaurants: RestaurantDisplay[] =
      this.restaurantService.getRestaurants();
    this.display.next(restaurants);
  }
  displayDishes() {
    // send dishes array
    // this.display.next('dishes');
  }
  getDisplay() {
    return this.display.asObservable();
  }
}
