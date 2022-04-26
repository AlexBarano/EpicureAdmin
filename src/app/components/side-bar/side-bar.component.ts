import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private displayService: DisplayService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showChefs() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      alert('Please log in again to continue');
      return;
    }
    this.displayService.displayChefs();
  }
  showDishes() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      alert('Please log in again to continue');
      return;
    }
    this.displayService.displayDishes();
  }
  showRestaurants() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      alert('Please log in again to continue');
      return;
    }
    this.displayService.displayRestaurants();
  }
}
