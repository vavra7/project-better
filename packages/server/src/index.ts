import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { dbConfig } from './config/dbConfig';
import { ApolloServer } from 'apollo-server-express';
import { schemaWithResolvers } from './modules';

const PORT = 4000;

(async () => {
  await createConnection(dbConfig).catch(err => {
    console.error(err);
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: schemaWithResolvers
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => console.log('ready - started server on http://localhost:%s', PORT));
})();
