import { CreatePostagemInput } from './create-postagem.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostagemInput extends PartialType(CreatePostagemInput) {
  @Field(() => Int)
  id: number;
}
