import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstEmail: new FormControl(''),
    secondEmail: new FormControl(''),
    firstPassword: new FormControl(''),
    secondPassword: new FormControl(''),
  });
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSubmit() {
    if (this.form.valid) {
      // check if can create the user
      // validate here everything
      this.router.navigate(['login']);
    }
  }
  onBack() {
    // no validation req here
    this.router.navigate(['login']);
  }
}
