import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}
  async onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      try {
        const response = await this.authService.login(email, password);
        const token = response.accessToken;
        AuthService.setToken(token);
        this.router.navigate(['admin']);
      } catch (error) {
        console.log(error);
      }
    }
  }
  onRegister() {
    this.router.navigate(['register']);
  }
}
