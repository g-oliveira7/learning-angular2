import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.scss']
})
export class AlunoEditComponent implements OnInit, OnDestroy {

  idAluno: number = 0;
  aluno: any;
  inscricaoId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
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
}
