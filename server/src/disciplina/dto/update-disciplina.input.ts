import { CreateDisciplinaInput } from './create-disciplina.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDisciplinaInput extends PartialType(CreateDisciplinaInput) {
  @Field(() => Int)
  id: number;
}
