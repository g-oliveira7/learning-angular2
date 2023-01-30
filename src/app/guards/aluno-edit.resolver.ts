import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { AlunosService } from './../alunos/alunos.service';
import { Aluno } from '../alunos/aluno';

@Injectable()
export class AlunoEditResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Aluno> | Promise<Aluno> | Aluno {
        const idAluno = route.params['id'];

        return this.alunosService.getAluno(idAluno)
    }
}