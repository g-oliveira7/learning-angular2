import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfirmationService } from './../../components/confirmation/confirmation.service';
import { IFormCanDeactivate } from './../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.scss']
})
export class AlunoEditComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  idAluno: number = 0;
  aluno: any;
  inscricaoId: Subscription;
  mudouForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
    private confirmationService: ConfirmationService
  ) {
    this.inscricaoId = new Subscription();
  }

  ngOnInit(): void {
    this.inscricaoId = this.route.params.subscribe(params => {
      this.idAluno = params['id']
      this.aluno = this.alunosService.getAluno(this.idAluno);
    })
  }

  ngOnDestroy(): void {
    this.inscricaoId.unsubscribe()
  }

  salvar() {
    this.alunosService.updateAluno(this.aluno);
    this.router.navigate(['/alunos', this.idAluno])
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
