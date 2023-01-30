
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunosService } from './../alunos/alunos.service';
import { Aluno } from './../alunos/aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {
        const idAluno = route.params['id'];

        return this.alunosService.getAluno(idAluno);
    }
}