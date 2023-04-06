import { CreateUsuarioDisciplinaInput } from './create-usuario_disciplina.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsuarioDisciplinaInput extends PartialType(CreateUsuarioDisciplinaInput) {
  @Field(() => Int)
  id: number;
}
