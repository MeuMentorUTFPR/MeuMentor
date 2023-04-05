import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioDisciplinaModule } from './usuario_disciplina/usuario_disciplina.module';
import { PostagemModule } from './postagem/postagem.module';
import { ComentarioModule } from './comentario/comentario.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, DisciplinaModule, ComentarioModule, PostagemModule, UsuarioDisciplinaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
