import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { DisplayService } from 'src/app/services/display.service';
import { ChefDisplay } from 'src/app/models/chef.model';
import { RestaurantDisplay } from 'src/app/models/restaurant.model';
import { DishDisplay } from 'src/app/models/dish.model';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

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
    this.options = fb.group({
      name: data.name || '',
      image: data.image || '',
      description: 'description' in data ? data.description : '' || '',
      isChefOfTheWeek:
        'isChefOfTheWeek' in data ? data.isChefOfTheWeek : '' || '',
      price: 'price' in data ? data.price : '' || '',
      ingredients: 'ingredients' in data ? [data.ingredients] : '' || '',
      tags: 'tags' in data ? [data.tags] : '' || '',
      restaurant: 'restaurant' in data ? data.restaurant : '' || '',
      chef: 'chef' in data ? data.chef : '' || '',
      isPopular: 'isPopular' in data ? data.isPopular : '' || '',
      signatureDish: 'signatureDish' in data ? data.signatureDish : '' || '',
    });
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    this.dialogRef.close();
  }
}
