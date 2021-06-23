import { dependency } from '@foal/core';

import { PrismaService } from './prisma.service'
import {Movie} from '../../generated/typegraphql-prisma'

export class MovieService {
  @dependency
  private prismaService: PrismaService

  async similar(movie: Movie) {
    const actorIds = movie?.actors?.map(actor => actor.id)
    const categoryIds = movie?.categories?.map(category => category.id)
    return this.prismaService.movie.findMany({
      where: {
        AND: [
          {
            id: {
              not: movie.id
            }
          },
          {
            OR: [
              {
                actors: {
                  some: {
                    id: {
                      in: actorIds
                    }
                  }
                }
              },
              {
                categories: {
                  some: {
                    id: {
                      in: categoryIds
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    })
  }
}
