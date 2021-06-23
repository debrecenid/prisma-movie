import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Category {
  @Field()
  id: number

  @Field()
  name: string
}
