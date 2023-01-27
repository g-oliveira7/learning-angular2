import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnDestroy {

  idCurso: number = 0;
  inscricaoId: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.inscricaoId = this.route.params.pipe()
      .subscribe(params => this.idCurso = <number>params['id'])

    this.curso = this.cursosService.getCurso(this.idCurso)
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe();
  }
}
