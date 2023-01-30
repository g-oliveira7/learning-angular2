import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  message: string

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { message: string } 
  ) {
    this.message = data.message;
  }
}
