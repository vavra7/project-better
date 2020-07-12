import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig } from './config/dbConfig';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

const PORT = 4000;

const schema = loadSchemaSync(__dirname + '/modules/**/*.gql', {
  loaders: [new GraphQLFileLoader()]
});

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

(async () => {
  await createConnection(dbConfig).catch(err => {
    console.error(err);
  });

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: schemaWithResolvers
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => console.log('ready - started server on http://localhost:%s', PORT));
})();
