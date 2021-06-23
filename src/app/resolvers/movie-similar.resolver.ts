import { dependency } from '@foal/core'
import { Resolver, FieldResolver, Root } from 'type-graphql'

import {Movie} from '../../generated/typegraphql-prisma'
import { MovieService } from '../services'

@Resolver(_of => Movie)
export class MovieSimilarResolver {

  @dependency
  private movieService: MovieService 

  @FieldResolver(_type => [Movie])
  async similar(@Root() movie: Movie) {
    return this.movieService.similar(movie)
  }
}
