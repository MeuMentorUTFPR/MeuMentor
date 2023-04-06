import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioDisciplinaResolver } from './usuario_disciplina.resolver';
import { UsuarioDisciplinaService } from './usuario_disciplina.service';

describe('UsuarioDisciplinaResolver', () => {
  let resolver: UsuarioDisciplinaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioDisciplinaResolver, UsuarioDisciplinaService],
    }).compile();

    resolver = module.get<UsuarioDisciplinaResolver>(UsuarioDisciplinaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
