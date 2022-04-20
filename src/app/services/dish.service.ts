import { Injectable } from '@angular/core';
import { DishDisplay } from '../models/dish.model';

@Injectable({ providedIn: 'root' })
export class DishService {
  constructor() {}

  getDishes(): DishDisplay[] {
    const arr: DishDisplay[] = [];
    const dish: DishDisplay = {
      name: 'dish',
      restaurant: 'res1',
      image: 'image',
      price: 420,
      ingredients: 'stuff',
      tags: ['tag1'],
    };
    arr.push(dish);
    return arr;
  }
  deleteDish() {}
  updateDish() {}
  createNewDish() {}
}
