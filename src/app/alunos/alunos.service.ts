import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

    alunos: Aluno[] = [
        { id: 1, nome: 'Jonh Blue', email: 'jonh.blue@gmail.com' },
        { id: 2, nome: 'Mary Pink', email: 'mary.pink@gmail.com' },
        { id: 3, nome: 'Marco Purple', email: 'marco.purple@gmail.com' },
    ]

    getAlunos(): Aluno[] {
        return this.alunos;
    }

    getAluno(id: number): Aluno {
        const alunos = this.getAlunos();

        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];

            if (aluno.id == id) {
                return aluno;
            }
        }
        return { id: NaN, nome: '', email: ''}
    }

    novoAluno(nome: string, email: string): void {
        const qntAlunos = this.alunos.length
        const ultimoId = this.alunos[qntAlunos - 1].id
        
        const aluno = new Aluno(ultimoId + 1, nome, email);

        this.alunos.push(aluno)
    }

    updateAluno(aluno: Aluno): void {
        if (aluno.id != null) {
            for (let i = 0; i < this.alunos.length; i++) {
                let aluno_da_lista = this.alunos[i];
    
                if (aluno_da_lista.id == aluno.id) {
                    this.alunos[i] = aluno;
                }
            }
        }
    }
}