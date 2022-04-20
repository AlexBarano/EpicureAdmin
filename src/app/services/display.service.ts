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
  private display: BehaviorSubject<any> = new BehaviorSubject<any>('');
  private type: BehaviorSubject<string> = new BehaviorSubject<string>('chef');
  private columns: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    chefColumns
  );
  constructor(
    private chefService: ChefService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  displayChefs() {
    const chefs: ChefDisplay[] = this.chefService.getChefs();
    this.display.next(chefs);
    this.columns.next(chefColumns);
    this.type.next('chef');
  }
  displayRestaurants() {
    const restaurants: RestaurantDisplay[] =
      this.restaurantService.getRestaurants();
    this.display.next(restaurants);
    this.columns.next(restaurantColumns);
    this.type.next('restaurant');
  }
  displayDishes() {
    const dishes: DishDisplay[] = this.dishService.getDishes();
    this.display.next(dishes);
    this.columns.next(dishColumns);
    this.type.next('dish');
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
}
