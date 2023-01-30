import { Observable } from 'rxjs';
import { ConfirmationComponent } from './confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationService {

    constructor(
        private dialog: MatDialog
    ) { }

    open(msg: string): Observable<boolean> {
        const dialogRef = this.dialog.open(ConfirmationComponent, {
            data: { message: msg },
            width: '400px',
            hasBackdrop: false
        })

        return dialogRef.afterClosed()
    }
}