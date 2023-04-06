import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './entities/disciplina.entity';
import { CreateDisciplinaInput } from './dto/create-disciplina.input';
import { UpdateDisciplinaInput } from './dto/update-disciplina.input';

@Resolver(() => Disciplina)
export class DisciplinaResolver {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Mutation(() => Disciplina)
  createDisciplina(@Args('createDisciplinaInput') createDisciplinaInput: CreateDisciplinaInput) {
    return this.disciplinaService.create(createDisciplinaInput);
  }

  @Query(() => [Disciplina], { name: 'disciplina' })
  findAll() {
    return this.disciplinaService.findAll();
  }

  @Query(() => Disciplina, { name: 'disciplina' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.disciplinaService.findOne(id);
  }

  @Mutation(() => Disciplina)
  updateDisciplina(@Args('updateDisciplinaInput') updateDisciplinaInput: UpdateDisciplinaInput) {
    return this.disciplinaService.update(updateDisciplinaInput.id, updateDisciplinaInput);
  }

  @Mutation(() => Disciplina)
  removeDisciplina(@Args('id', { type: () => Int }) id: number) {
    return this.disciplinaService.remove(id);
  }
}
