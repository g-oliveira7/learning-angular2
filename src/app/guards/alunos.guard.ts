import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    constructor(
        private authService: AuthService
    ) { }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const eAdmRouter = state.url.endsWith('editar') || state.url.endsWith('novo')

        if (eAdmRouter) {
            const usuarioLogado = this.authService.getUsuarioLogado()

            if (usuarioLogado.role != 'admin') {
                return false
            }
        }
        return true
    }
}