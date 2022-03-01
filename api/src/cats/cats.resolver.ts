import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => Cat, { name: 'cat' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

}
