import { Module } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { PostagemResolver } from './postagem.resolver';

@Module({
  providers: [PostagemResolver, PostagemService]
})
export class PostagemModule {}
