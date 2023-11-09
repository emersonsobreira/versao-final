import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';

@Injectable()
export class AlunosService {

  constructor(private prisma: PrismaService) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.prisma.aluno.create({data: {
      nome: 'createAlunoDto.nome',
      matricula: createAlunoDto.matricula,
    }});
  }

  findAll() {
    return this.prisma.aluno.findMany();
  }

  findAllComTurmas() {
    return this.prisma.aluno.findMany({
      include: {
        turma: true
      }
    });
  }

  findAllOrderByName(){
    return this.prisma.aluno.findMany({
      select: {
        nome: true
      },
      orderBy: {
        nome: 'asc'
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} aluno`;
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return `This action updates a #${id} aluno`;
  }

  remove(id: number) {
    return `This action removes a #${id} aluno`;
  }
}
