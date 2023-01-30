import { Observable } from 'rxjs';

export interface IFormCanDeactivate {

    podeDesativar(): Observable<boolean> | true;
}