import { RestaurantDisplay } from './restaurant.model';

export interface DishDisplay {
  name: string;
  restaurant: RestaurantDisplay;
  image: string;
  price: number;
  ingredients: string[];
  tags: string[];
  _id: string;
}
