import { ObjectType, Field } from '@nestjs/graphql';

type catType = 'Persian Cat' | 'Maine Coon' | 'Bengal Cat';

interface CatInterface {
  type: catType,
  name: string,
  img: string
}

@ObjectType()
export class Cat implements CatInterface {
  @Field({ description: 'The type of cat' })
  type: catType
  @Field({ description: 'The name of the cat' })
  name: string
  @Field({ description: 'The image of the cat' })
  img: string
}
