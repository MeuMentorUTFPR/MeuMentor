import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioDisciplinaService } from './usuario_disciplina.service';

describe('UsuarioDisciplinaService', () => {
  let service: UsuarioDisciplinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioDisciplinaService],
    }).compile();

    service = module.get<UsuarioDisciplinaService>(UsuarioDisciplinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
