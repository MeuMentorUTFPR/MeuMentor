import { Injectable } from '@nestjs/common';
import { CreateDisciplinaInput } from './dto/create-disciplina.input';
import { UpdateDisciplinaInput } from './dto/update-disciplina.input';

@Injectable()
export class DisciplinaService {
  create(createDisciplinaInput: CreateDisciplinaInput) {
    return 'This action adds a new disciplina';
  }

  findAll() {
    return `This action returns all disciplina`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disciplina`;
  }

  update(id: number, updateDisciplinaInput: UpdateDisciplinaInput) {
    return `This action updates a #${id} disciplina`;
  }

  remove(id: number) {
    return `This action removes a #${id} disciplina`;
  }
}
