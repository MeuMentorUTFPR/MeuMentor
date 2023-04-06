import { Module } from '@nestjs/common';
import { UsuarioDisciplinaService } from './usuario_disciplina.service';
import { UsuarioDisciplinaResolver } from './usuario_disciplina.resolver';

@Module({
  providers: [UsuarioDisciplinaResolver, UsuarioDisciplinaService]
})
export class UsuarioDisciplinaModule {}
