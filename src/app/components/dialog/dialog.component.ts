import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { DisplayService } from 'src/app/services/display.service';
import { ChefDisplay } from 'src/app/models/chef.model';
import { RestaurantDisplay } from 'src/app/models/restaurant.model';
import { DishDisplay } from 'src/app/models/dish.model';
import { ChefService } from 'src/app/services/chef.service';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  dialogType!: string;
  options!: FormGroup;
  resDishes!: DishDisplay[];
  chefs!: ChefDisplay[];
  restaurants!: RestaurantDisplay[];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ChefDisplay | RestaurantDisplay | DishDisplay,
    private displayService: DisplayService,
    fb: FormBuilder,
    private chefService: ChefService,
    private dishService: DishService,
    private restaurantService: RestaurantService
  ) {
    this.displayService.getTypeOfDisplay().subscribe((type: string) => {
      this.dialogType = type;
    });

    switch (this.dialogType) {
      case 'chef':
        this.options = fb.group({
          _id: data._id,
          name: data.name,
          image: data.image,
          description: 'description' in data ? data.description : null,
          isChefOfTheWeek:
            'isChefOfTheWeek' in data ? data.isChefOfTheWeek : null,
        });
        break;
      case 'dish':
        this.options = fb.group({
          _id: data._id,
          name: data.name,
          image: data.image,
          price: 'price' in data ? data.price : null,
          ingredients: 'ingredients' in data ? [data.ingredients] : null,
          tags: 'tags' in data ? [data.tags] : null,
          restaurant: 'restaurant' in data ? data.restaurant : null,
        });
        break;
      case 'restaurant':
        this.options = fb.group({
          _id: data._id,
          name: data.name,
          image: data.image,
          chef: 'chef' in data ? data.chef : null,
          isPopular: 'isPopular' in data ? data.isPopular : null,
          signatureDish: 'signatureDish' in data ? data.signatureDish : null,
        });
        break;
    }
  }

  async ngOnInit(): Promise<void> {
    switch (this.dialogType) {
      case 'restaurant':
        const chefs = await this.chefService.getChefs();
        this.chefs = chefs.chefs;
        const restaurantId = this.options.value._id;
        if (restaurantId) {
          const restaurantDishes = await this.dishService.getDishesOfRestaurant(
            restaurantId
          );
          this.resDishes = restaurantDishes.dishes;
        }
        break;
      case 'dish':
        const restaurants = await this.restaurantService.getRestaurants();
        this.restaurants = restaurants.restaurants;
        break;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async onSaveClick(): Promise<void> {
    // switch case on type then check if we update or create
    switch (this.dialogType) {
      case 'chef':
        if (this.options.value._id === null) {
          await this.chefService.createNewChef(this.options.value);
        } else {
          await this.chefService.updateChef(this.options.value);
        }
        await this.displayService.displayChefs();
        break;
      case 'dish':
        if (this.options.value._id === null) {
          await this.dishService.createNewDish(this.options.value);
        } else {
          await this.dishService.updateDish(this.options.value);
        }
        await this.displayService.displayDishes();
        break;
      case 'restaurant':
        if (this.options.value._id === null) {
          await this.restaurantService.createNewRestaurant(this.options.value);
        } else {
          await this.restaurantService.updateRestaurant(this.options.value);
        }
        await this.displayService.displayRestaurants();
        break;
    }

    this.dialogRef.close();
  }
}
