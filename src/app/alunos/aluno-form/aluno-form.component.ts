import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AlunosService } from './../alunos.service';
import { ConfirmationService } from './../../components/confirmation/confirmation.service';
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
    private router: Router,
    private confirmationService: ConfirmationService
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

  podeDesativar(): Observable<boolean> | true {
    if (this.formMudou) {
      return this.confirmationService.open('Are you sure? Will not save your changes...')
    }
    return true
  }
}
