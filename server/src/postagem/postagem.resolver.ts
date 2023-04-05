import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostagemService } from './postagem.service';
import { Postagem } from './entities/postagem.entity';
import { CreatePostagemInput } from './dto/create-postagem.input';
import { UpdatePostagemInput } from './dto/update-postagem.input';

@Resolver(() => Postagem)
export class PostagemResolver {
  constructor(private readonly postagemService: PostagemService) {}

  @Mutation(() => Postagem)
  createPostagem(@Args('createPostagemInput') createPostagemInput: CreatePostagemInput) {
    return this.postagemService.create(createPostagemInput);
  }

  @Query(() => [Postagem], { name: 'postagem' })
  findAll() {
    return this.postagemService.findAll();
  }

  @Query(() => Postagem, { name: 'postagem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postagemService.findOne(id);
  }

  @Mutation(() => Postagem)
  updatePostagem(@Args('updatePostagemInput') updatePostagemInput: UpdatePostagemInput) {
    return this.postagemService.update(updatePostagemInput.id, updatePostagemInput);
  }

  @Mutation(() => Postagem)
  removePostagem(@Args('id', { type: () => Int }) id: number) {
    return this.postagemService.remove(id);
  }
}
