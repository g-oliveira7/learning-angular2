import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authCredentials: Credentials;
  private usuarioAutenticado: boolean = false;

  mostrarMenuEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.authCredentials = new Credentials()
    this.authCredentials.username = 'admin'
    this.authCredentials.password = 'admin'
  }

  logar(creds: Credentials) {
    if (this.autenticado(creds)) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEvent.emit(true);
      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEvent.emit(false);
    }
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado
  }

  private autenticado(creds: Credentials): boolean {
    return this.authCredentials.username.toLocaleLowerCase() == creds.username.toLocaleLowerCase() &&
    this.authCredentials.password == creds.password
  }
}
