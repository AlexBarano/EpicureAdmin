import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSubmit() {
    if (this.form.valid) {
      // check if can create the user
      // validate here everything
      this.router.navigate(['admin']);
    }
  }
  onRegister() {
    this.router.navigate(['register']);
  }
}
