import { Resolvers } from './typesGenerated';
import { hello } from './resolvers/hello';
import { registerUser } from './resolvers/registerUser';

export const userResolvers: Resolvers = {
  Query: {
    hello
  },
  Mutation: {
    registerUser
  }
};
