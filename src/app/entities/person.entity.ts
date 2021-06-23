import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Person {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  born: Date

  @Field()
  died: Date
}
