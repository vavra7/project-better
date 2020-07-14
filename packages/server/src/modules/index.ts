import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { userResolvers } from './user';
import { listingResolvers } from './listing';

let _schema = loadSchemaSync(__dirname + '/**/*.gql', {
  loaders: [new GraphQLFileLoader()]
});

_schema = addResolversToSchema({
  schema: _schema,
  resolvers: listingResolvers as any
});

_schema = addResolversToSchema({
  schema: _schema,
  resolvers: userResolvers as any
});

export const schema = _schema;
