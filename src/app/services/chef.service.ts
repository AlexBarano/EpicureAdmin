import { Injectable } from '@angular/core';
import { ChefDisplay } from '../models/chef.model';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor() {}

  getChefs(): ChefDisplay[] {
    const arr: ChefDisplay[] = [];
    const chef: ChefDisplay = {
      name: 'chef',
      description: 'desc',
      image: 'image',
      isChefOfTheWeek: true,
    };
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    arr.push(chef);
    return arr;
  }
  deleteChef() {}
  updateChef() {}
  createNewChef() {}
}
