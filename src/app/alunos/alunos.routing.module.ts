import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoByIdResolver } from '../guards/aluno-by-id.resolver';
import { AlunosComponent } from './alunos.component';
import { AlunoFormDeactivate } from './../guards/alunoform-deactivate';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';

const alunosRoutes: Routes = [
    {
        path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard],
        children: [
            { 
                path: 'novo', component: AlunoFormComponent
            },
            { 
                path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoByIdResolver }
            },
            { 
                path: ':id/editar', component: AlunoEditComponent,
                canDeactivate: [AlunoFormDeactivate],
                resolve: { aluno: AlunoByIdResolver }
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }