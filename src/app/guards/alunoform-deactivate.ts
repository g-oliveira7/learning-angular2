import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunoFormDeactivate implements CanDeactivate<IFormCanDeactivate> {
    
    canDeactivate(
        component: IFormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.podeDesativar();
    }
}