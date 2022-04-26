import { ChefDisplay } from './chef.model';

export interface RestaurantDisplay {
  name: string;
  chef: ChefDisplay;
  signatureDish: string;
  image: string;
  isPopular: boolean;
  _id: string;
}
