import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  autenticar(username: string, password: string) {
    console.log(`{ username: ${username}, password: ${password} }`);
  }
}
