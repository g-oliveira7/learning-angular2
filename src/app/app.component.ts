import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEvent
      .subscribe(mostrar => this.mostrarMenu = mostrar);
  }
}
