import { CursosService } from './../cursos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent {

  idCurso: number = 0;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.route.params.pipe().subscribe(params => this.idCurso = <number>params['id'])

    this.curso = this.cursosService.getCurso(this.idCurso)
  }
}
