import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {}

  showChefs() {
    this.displayService.displayChefs();
  }
  showDishes() {
    this.displayService.displayDishes();
  }
  showRestaurants() {
    this.displayService.displayRestaurants();
  }
}
