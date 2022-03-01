import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { CatsController } from './cats.controller';

@Module({
  providers: [CatsResolver, CatsService],
  controllers: [CatsController]
})
export class CatsModule {}
