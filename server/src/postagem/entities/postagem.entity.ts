import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Postagem {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
