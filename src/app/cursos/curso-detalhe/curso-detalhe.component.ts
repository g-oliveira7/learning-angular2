import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, Subscription } from 'rxjs';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  idCurso: number = 0;
  inscricaoId: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.inscricaoId = new Subscription()
  }

  ngOnInit(): void {
    this.inscricaoId = this.route.params
      .subscribe(params => {        
        this.idCurso = params['id']
        this.curso = this.cursosService.getCurso(this.idCurso)
      })
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe();
  }
}
