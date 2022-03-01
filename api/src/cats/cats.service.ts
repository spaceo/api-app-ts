import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

  private loadCat(): Promise<Cat> {
    return new Promise(function(resolve, reject) {
      return setTimeout(() => {
        const cat = new Cat();
        cat.type = 'Bengal Cat';
        cat.name = 'Allan';
        cat.img = 'http://localhost:3001/images/bengal.jpg';
        resolve(cat);
      }, 3000);
    });
  }

  findOne(id: number): Promise<Cat> {
    return this.loadCat();
  }

}
