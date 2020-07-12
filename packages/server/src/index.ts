import express from 'express';
import { test } from '@project-better/common';

const PORT = 4000;

(async () => {
  const app = express();

  console.log(test());

  app.get('/', (req, res) => res.send('Hello world!'));
  app.listen(PORT, () => console.log('ready - started server on http://localhost:%s', PORT));
})();
