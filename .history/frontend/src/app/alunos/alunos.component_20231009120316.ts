import { Component, ViewChild } from '@angular/core';
import { Aluno, AlunoService } from '../servicos/aluno.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent {

  @ViewChild(MatTable) minhaTabela!: MatTable<any>;

  colunasTabela = ['matricula', 'nome', 'acoes']

  constructor(
    protected service: AlunoService
  ){
    service.getAlunos().subscribe(dados => {
      service.listaAlunos = dados
      
    })
  }

  cadastrarAluno(aluno: Aluno){
    this.service.addAluno(aluno)
  }

  excluirAluno(indice: number){
    this.service.removeAluno(indice)
    this.minhaTabela.renderRows()
  }


}
