import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent {

  aluno = { nome: '', email: '' }

  constructor(
    private alunosService: AlunosService,
    private router: Router,
  ) { }

  salvar() {
    this.alunosService.novoAluno(this.aluno.nome, this.aluno.email);
    this.router.navigate(['/alunos'])
  }
}
