import { Resolvers } from './typesGenerated';
import { hello } from './resolvers/hello';
import { registerUser } from './resolvers/registerUser';
import { isAuthenticated } from '../middleware';
import { composeResolvers } from '@graphql-tools/resolvers-composition';

export const _userResolvers: Resolvers = {
  Query: {
    hello
  },
  Mutation: {
    registerUser
  }
};

const resolversComposition = {
  'Query.hello': [isAuthenticated()]
};

export const userResolvers = composeResolvers(_userResolvers, resolversComposition);
