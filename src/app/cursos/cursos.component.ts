import { CursosModule } from './cursos.module';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnDestroy {

  cursos: any[];
  pagina: number = 0;
  inscricaoPagina: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.cursos = this.cursosService.getCursos();
    this.inscricaoPagina = this.route.queryParams.pipe()
      .subscribe(params => this.pagina = params['pagina'])
  }

  ngOnDestroy(): void {
    this.inscricaoPagina.unsubscribe();
  }
}
