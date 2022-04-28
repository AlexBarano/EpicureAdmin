import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  async onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      try {
        await this.authService.register(email, password);
        this.router.navigate(['login']);
        alert('Created new user!');
      } catch (error: any) {
        console.log(error);
        alert(error.error.error.name);
      }
    }
  }
  onBack() {
    // no validation req here
    this.router.navigate(['login']);
  }
}
