import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard.';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', component: HomeComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'cursos', 
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
        canActivate: [AuthGuard],
        canMatch: [AuthGuard] 
    },
    { 
        path: 'alunos', 
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard],
        canMatch: [AuthGuard] 
    },
    { 
        path: 'login', 
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '**', component: PaginaNaoEncontradaComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }