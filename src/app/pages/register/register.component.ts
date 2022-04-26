import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}
  async onSubmit() {
    if (this.form.valid) {
      // check if can create the user
      // this.authService.register(this.form.value);
      const email = this.form.value.firstEmail;
      const password = this.form.value.firstPassword;
      try {
        await this.authService.register(email, password);
        this.router.navigate(['login']);
      } catch (error) {
        console.log(error);
      }
    }
  }
  onBack() {
    // no validation req here
    this.router.navigate(['login']);
  }
}
