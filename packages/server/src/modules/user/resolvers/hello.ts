import { QueryResolvers } from '../typesGenerated';

export const hello: QueryResolvers['hello'] = () => {
  return 'Hello World!';
};
