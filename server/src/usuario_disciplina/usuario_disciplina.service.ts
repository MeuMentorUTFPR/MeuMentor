import { Injectable } from '@nestjs/common';
import { CreateUsuarioDisciplinaInput } from './dto/create-usuario_disciplina.input';
import { UpdateUsuarioDisciplinaInput } from './dto/update-usuario_disciplina.input';

@Injectable()
export class UsuarioDisciplinaService {
  create(createUsuarioDisciplinaInput: CreateUsuarioDisciplinaInput) {
    return 'This action adds a new usuarioDisciplina';
  }

  findAll() {
    return `This action returns all usuarioDisciplina`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioDisciplina`;
  }

  update(id: number, updateUsuarioDisciplinaInput: UpdateUsuarioDisciplinaInput) {
    return `This action updates a #${id} usuarioDisciplina`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioDisciplina`;
  }
}
