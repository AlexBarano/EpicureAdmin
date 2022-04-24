import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() contentType!: string;
  displayContent!: string;

  constructor() {}

  ngOnChanges(): void {
    switch (this.contentType) {
      case 'chef':
        this.displayContent = 'Chefs';
        break;
      case 'restaurant':
        this.displayContent = 'Restaurants';
        break;
      case 'dish':
        this.displayContent = 'Dishes';
        break;
    }
  }
}
