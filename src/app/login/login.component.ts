import { AuthService } from './auth.service';
import { Credentials } from './credentials';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credenciais: Credentials;

  constructor(private authService: AuthService) {
    this.credenciais = new Credentials()
  }

  logar() {
    this.authService.logar(this.credenciais)
  }
}
