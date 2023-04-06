import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsuarioDisciplinaService } from './usuario_disciplina.service';
import { UsuarioDisciplina } from './entities/usuario_disciplina.entity';
import { CreateUsuarioDisciplinaInput } from './dto/create-usuario_disciplina.input';
import { UpdateUsuarioDisciplinaInput } from './dto/update-usuario_disciplina.input';

@Resolver(() => UsuarioDisciplina)
export class UsuarioDisciplinaResolver {
  constructor(private readonly usuarioDisciplinaService: UsuarioDisciplinaService) {}

  @Mutation(() => UsuarioDisciplina)
  createUsuarioDisciplina(@Args('createUsuarioDisciplinaInput') createUsuarioDisciplinaInput: CreateUsuarioDisciplinaInput) {
    return this.usuarioDisciplinaService.create(createUsuarioDisciplinaInput);
  }

  @Query(() => [UsuarioDisciplina], { name: 'usuarioDisciplina' })
  findAll() {
    return this.usuarioDisciplinaService.findAll();
  }

  @Query(() => UsuarioDisciplina, { name: 'usuarioDisciplina' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioDisciplinaService.findOne(id);
  }

  @Mutation(() => UsuarioDisciplina)
  updateUsuarioDisciplina(@Args('updateUsuarioDisciplinaInput') updateUsuarioDisciplinaInput: UpdateUsuarioDisciplinaInput) {
    return this.usuarioDisciplinaService.update(updateUsuarioDisciplinaInput.id, updateUsuarioDisciplinaInput);
  }

  @Mutation(() => UsuarioDisciplina)
  removeUsuarioDisciplina(@Args('id', { type: () => Int }) id: number) {
    return this.usuarioDisciplinaService.remove(id);
  }
}
