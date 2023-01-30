import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosService } from './alunos.service';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoEditComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AlunosRoutingModule
  ],
  providers: [
    AlunosService,
    AlunosGuard,
  ]
})
export class AlunosModule { }
