import { Module } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioResolver } from './comentario.resolver';

@Module({
  providers: [ComentarioResolver, ComentarioService]
})
export class ComentarioModule {}
