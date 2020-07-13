import { QueryResolvers, MutationResolvers } from './modelGenerated';
import { hello } from './resolvers/hello';
import { registerUser } from './resolvers/registerUser';

export const userQuery: QueryResolvers = {
  hello
};

export const userMutation: MutationResolvers = {
  registerUser
};
