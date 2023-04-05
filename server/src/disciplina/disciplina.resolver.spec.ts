import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinaResolver } from './disciplina.resolver';
import { DisciplinaService } from './disciplina.service';

describe('DisciplinaResolver', () => {
  let resolver: DisciplinaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinaResolver, DisciplinaService],
    }).compile();

    resolver = module.get<DisciplinaResolver>(DisciplinaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
