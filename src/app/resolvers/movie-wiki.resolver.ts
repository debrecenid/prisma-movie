import { dependency } from '@foal/core'
import { Resolver, FieldResolver, Root, ObjectType, Field } from 'type-graphql'

import {Movie} from '../../generated/typegraphql-prisma'
import { WikiService } from '../services'

@ObjectType()
class Wiki {
  @Field()
  link: string

  @Field()
  desc: string
}

@Resolver(_of => Movie)
export class MovieWikiResolver {
  @dependency
  private wikiService: WikiService

  @FieldResolver(_type => Wiki)
  async wiki(@Root() movie: Movie) {
    return this.wikiService.fetchWiki(movie.title)
  }
}
