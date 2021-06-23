import { ObjectType, Field } from 'type-graphql'

import { Person } from './person.entity'
import { Category } from './category.entity'

@ObjectType()
export class Movie {
  @Field()
  id: number

  @Field()
  title: string

  @Field(_returns => [Category])
  categories: Category[]

  @Field(_returns => [Person])
  actors: Person[]
}
