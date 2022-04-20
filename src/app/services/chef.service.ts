import { Injectable } from '@angular/core';
import { ChefDisplay } from '../models/chef.model';

@Injectable({ providedIn: 'root' })
export class ChefService {
  constructor() {}

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async getChefs(): Promise<ChefDisplay[]> {
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
    await this.delay(1000);
    return arr;
  }
  deleteChef() {}
  updateChef() {}
  createNewChef() {}
}
