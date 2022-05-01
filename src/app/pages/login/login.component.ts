import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  async onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      try {
        const response = await this.authService.login(email, password);
        const token = response.accessToken;
        this.authService.setToken(token);
        this.router.navigate(['admin']);
      } catch (error: any) {
        alert(error.error.error.name);
      }
    }
  }
  onRegister() {
    this.router.navigate(['register']);
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
