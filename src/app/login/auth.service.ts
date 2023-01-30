import { createUrlTreeFromSnapshot, Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private usuarioLogado: any;

  mostrarMenuEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {
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

  getUsuarioLogado(): any {
    return this.usuarioLogado
  }

  private autenticado(creds: Credentials): boolean {
    const usuarios = this.usuarios()

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].username == creds.username &&
        usuarios[i].password == creds.password) {
        this.usuarioLogado = usuarios[i];
        return true;
      }
    }
    return false;
  }

  private usuarios() {
    return [
      { username: 'admin', password: 'admin', role: 'admin' },
      { username: 'client', password: '1234', role: 'normal' },
    ]
  }
}
