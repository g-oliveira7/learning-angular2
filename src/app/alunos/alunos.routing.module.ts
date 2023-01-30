import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
                path: 'novo', component: AlunoFormComponent, 
                canDeactivate: [AlunoFormDeactivate]
            },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoEditComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }