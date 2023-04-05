import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioDisciplinaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
