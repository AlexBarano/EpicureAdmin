import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChefService } from './chef.service';
import { RestaurantService } from './restaurant.service';
import { DishService } from './dish.service';
import { ChefDisplay } from '../models/chef.model';
import { RestaurantDisplay } from '../models/restaurant.model';
import { DishDisplay } from '../models/dish.model';

const chefColumns: string[] = ['name', 'isChefOfTheWeek', 'edit'];
const dishColumns: string[] = ['name', 'restaurant', 'edit'];
const restaurantColumns: string[] = ['name', 'signatureDish', 'chef', 'edit'];

@Injectable({ providedIn: 'root' })
export class DisplayService {
  private display: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private type: BehaviorSubject<string> = new BehaviorSubject<string>('chef');
  private columns: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    chefColumns
  );
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    private chefService: ChefService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  async displayChefs() {
    this.loading.next(true);
    const chefs: { chefs: ChefDisplay[] } = await this.chefService.getChefs();
    this.display.next(chefs.chefs);
    this.columns.next(chefColumns);
    this.type.next('chef');
    this.loading.next(false);
  }
  async displayRestaurants() {
    this.loading.next(true);
    const restaurants: { restaurants: RestaurantDisplay[] } =
      await this.restaurantService.getRestaurants();
    this.display.next(restaurants.restaurants);
    this.columns.next(restaurantColumns);
    this.type.next('restaurant');
    this.loading.next(false);
  }
  async displayDishes() {
    this.loading.next(true);
    const dishes: { dishes: DishDisplay[] } =
      await this.dishService.getDishes();
    this.display.next(dishes.dishes);
    this.columns.next(dishColumns);
    this.type.next('dish');
    this.loading.next(false);
  }
  getDisplay() {
    return this.display.asObservable();
  }
  getTypeOfDisplay() {
    return this.type.asObservable();
  }
  getColumnsToDisplay() {
    return this.columns.asObservable();
  }
  getLoading() {
    return this.loading.asObservable();
  }
}
