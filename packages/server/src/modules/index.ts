import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { userQuery, userMutation } from './user';
import { listingQuery } from './listing';

const schema = loadSchemaSync(__dirname + '/**/*.gql', {
  loaders: [new GraphQLFileLoader()]
});

const resolvers = {
  Query: {
    ...userQuery,
    ...listingQuery
  },
  Mutation: {
    ...userMutation
  }
};

export const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers
});
