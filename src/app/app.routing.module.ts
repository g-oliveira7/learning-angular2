import { CursosComponent } from './cursos/cursos.component';
import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CursosRoutingModule
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }