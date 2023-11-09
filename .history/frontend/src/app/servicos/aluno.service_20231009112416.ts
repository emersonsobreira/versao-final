import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Aluno{
  id: number
  matricula: number
  nome: string
  turma_id: number
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  

  listaAlunos: any = []

  constructor(private http: HttpClient) { }

  addAluno(aluno: Aluno){
    this.listaAlunos.push(aluno);
  }

  removeAluno(index: number){
    this.listaAlunos.splice(index, 1);
  }

  getAlunos(){
    return this.http.get('http://localhost:3000/alunos/comTurmas')
  }

  createAluno(dados: any){
    
    return this.http.post('http://localhost:3000/alunos', dados)
  }
}
