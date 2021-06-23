import { ServiceManager, createService } from '@foal/core';

import { buildSchemaSync } from 'type-graphql'
import { MovieWikiResolver, MovieSimilarResolver } from './resolvers'
import { FindManyMovieResolver, MovieRelationsResolver } from '../generated/typegraphql-prisma'

const services = createService(ServiceManager)

export const schema =  buildSchemaSync({ 
  resolvers: [FindManyMovieResolver, MovieRelationsResolver, MovieWikiResolver, MovieSimilarResolver],
  container: { get: className => services.get(className) }
})
