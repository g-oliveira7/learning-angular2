import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'cursos', 
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) 
    },
    { 
        path: 'alunos', 
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule) 
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }