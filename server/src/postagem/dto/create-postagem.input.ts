import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostagemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
