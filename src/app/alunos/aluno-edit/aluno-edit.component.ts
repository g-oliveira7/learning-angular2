import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfirmationService } from './../../components/confirmation/confirmation.service';
import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.scss']
})
export class AlunoEditComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: Aluno;
  inscricaoId: Subscription;
  mudouForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
    private confirmationService: ConfirmationService
  ) {
    this.inscricaoId = new Subscription();
    this.aluno = { id: NaN, nome: '', email: ''};
  }

  ngOnInit(): void {
    this.inscricaoId = this.route.data.subscribe(data => {
      this.aluno = data['aluno'];
    });
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe()
  }

  salvar() {
    this.alunosService.updateAluno(this.aluno);
    this.router.navigate(['/alunos', this.aluno.id]);
  }

  onInput() {
    if (!this.mudouForm) {
      this.mudouForm = true
    }
  }

  podeDesativar(): Observable<boolean> | true {
    if (this.mudouForm) {
      return this.confirmationService.open('Are you sure? Will not save your changes...')
    }
    return true
  }
}
