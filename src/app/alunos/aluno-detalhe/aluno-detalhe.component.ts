import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricaoId: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricaoId = new Subscription();
    this.aluno = { id: NaN, nome: '', email: ''};
  }

  ngOnInit(): void {
    this.inscricaoId = this.route.data
      .subscribe(data => {
        this.aluno = data['aluno'];
      });
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
