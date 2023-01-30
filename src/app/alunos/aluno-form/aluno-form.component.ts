import { Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component } from '@angular/core';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements IFormCanDeactivate {

  private formMudou: boolean = false;
  aluno = { nome: '', email: '' }

  constructor(
    private alunosService: AlunosService,
    private router: Router
  ) { }

  salvar() {
    this.alunosService.novoAluno(this.aluno.nome, this.aluno.email);
    this.router.navigate(['/alunos'])
  }

  onInput() {
    if (!this.formMudou) {
      this.formMudou = true
    }
  }

  podeDesativar(): boolean {
    return !this.formMudou;
  }
}
