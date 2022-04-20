import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { DisplayService } from 'src/app/services/display.service';
import { ChefDisplay } from 'src/app/models/chef.model';
import { RestaurantDisplay } from 'src/app/models/restaurant.model';
import { DishDisplay } from 'src/app/models/dish.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  dialogType!: string;
  options!: FormGroup;
  isChefOfTheWeek = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ChefDisplay | RestaurantDisplay | DishDisplay,
    private displayService: DisplayService,
    fb: FormBuilder
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

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    console.log(this.options.value);

    // switch case on type then check of we update or create
    switch (this.dialogType) {
      case 'chef':
        if (this.options.value._id === null) {
        } else {
        }
        break;
      case 'dish':
        if (this.options.value._id === null) {
        } else {
        }
        break;
      case 'restaurant':
        if (this.options.value._id === null) {
        } else {
        }
        break;
    }

    this.dialogRef.close();
  }
}
