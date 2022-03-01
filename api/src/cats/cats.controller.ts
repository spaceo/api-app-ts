import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

interface CatParams extends ParameterDecorator {
  id: number
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  loadCat(@Param() params: CatParams): Promise<Cat> {
    return this.catsService.findOne(params.id);
  }
}
