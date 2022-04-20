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

  displayChefs() {
    this.loading.next(true);
    this.chefService.getChefs().subscribe((data: any) => {
      const chefs: ChefDisplay[] = data.chefs;
      this.display.next(chefs);
      this.columns.next(chefColumns);
      this.type.next('chef');
    });
    this.loading.next(false);
  }
  displayRestaurants() {
    this.loading.next(true);
    this.restaurantService.getRestaurants().subscribe((data: any) => {
      const restaurants: RestaurantDisplay[] = data.restaurants;
      this.display.next(restaurants);
      this.columns.next(restaurantColumns);
      this.type.next('restaurant');
    });
    this.loading.next(false);
  }
  async displayDishes() {
    this.loading.next(true);
    this.dishService.getDishes().subscribe((data: any) => {
      const dishes: DishDisplay[] = data.dishes;
      this.display.next(dishes);
      this.columns.next(dishColumns);
      this.type.next('dish');
    });
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
