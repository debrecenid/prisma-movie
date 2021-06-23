import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';


import { schema } from './app/app.schema'

export const getApolloMiddleware = () => {
  const prisma = new PrismaClient();
  const apolloServer = new ApolloServer({
    schema, 
    playground: true, 
    context: () => ({ prisma })
  })
  return apolloServer.getMiddleware({ path: '/graphql' })
}
