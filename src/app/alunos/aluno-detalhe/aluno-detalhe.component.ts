import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  idAluno: number = 0;
  inscricaoId: Subscription;
  aluno: any

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricaoId = new Subscription();
  }

  ngOnInit(): void {
    this.inscricaoId = this.route.params
      .subscribe(params => {
        this.idAluno = params['id']
        this.aluno = this.alunosService.getAluno(this.idAluno);
      })
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.idAluno, 'editar'])
  }
}
