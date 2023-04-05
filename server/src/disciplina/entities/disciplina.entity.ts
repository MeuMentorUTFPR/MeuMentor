import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Disciplina {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
