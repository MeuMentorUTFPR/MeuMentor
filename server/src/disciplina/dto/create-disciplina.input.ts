import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDisciplinaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
