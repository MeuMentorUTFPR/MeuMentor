import { Test, TestingModule } from '@nestjs/testing';
import { PostagemResolver } from './postagem.resolver';
import { PostagemService } from './postagem.service';

describe('PostagemResolver', () => {
  let resolver: PostagemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostagemResolver, PostagemService],
    }).compile();

    resolver = module.get<PostagemResolver>(PostagemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
