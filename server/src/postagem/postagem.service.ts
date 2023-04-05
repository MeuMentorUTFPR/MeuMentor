import { Injectable } from '@nestjs/common';
import { CreatePostagemInput } from './dto/create-postagem.input';
import { UpdatePostagemInput } from './dto/update-postagem.input';

@Injectable()
export class PostagemService {
  create(createPostagemInput: CreatePostagemInput) {
    return 'This action adds a new postagem';
  }

  findAll() {
    return `This action returns all postagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postagem`;
  }

  update(id: number, updatePostagemInput: UpdatePostagemInput) {
    return `This action updates a #${id} postagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} postagem`;
  }
}
