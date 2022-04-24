import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { DisplayService } from './services/display.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChefService } from './services/chef.service';
import { RestaurantService } from './services/restaurant.service';
import { DishService } from './services/dish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  columnsToDisplay: string[] = [];
  typeOfContentToDisplay: string = '';
  dataSource = new MatTableDataSource<any>();
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private displayService: DisplayService,
    private chefService: ChefService,
    private restaurantService: RestaurantService,
    private dishService: DishService,
    public dialog: MatDialog
  ) {
    this.displayService.getDisplay().subscribe((data: any) => {
      this.dataSource.data = data;
    });
    this.displayService.getTypeOfDisplay().subscribe((data: string) => {
      this.typeOfContentToDisplay = data;
    });
    this.displayService.getColumnsToDisplay().subscribe((data: string[]) => {
      this.columnsToDisplay = data;
    });
    this.displayService.getLoading().subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }

  ngOnInit(): void {
    this.displayService.displayChefs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(dataSend: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: dataSend,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed ', result);
    });
  }
  // add implementation
  async deleteRow(row: any): Promise<void> {
    switch (this.typeOfContentToDisplay) {
      case 'chef':
        await this.chefService.deleteChef(row);
        await this.displayService.displayChefs();
        break;
      case 'restaurant':
        await this.restaurantService.deleteRestaurant(row);
        await this.displayService.displayRestaurants();

        break;
      case 'dish':
        await this.dishService.deleteDish(row);
        await this.displayService.displayDishes();
        break;
      default:
        return;
    }
  }
}
