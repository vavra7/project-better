import { QueryResolvers } from '../modelGenerated';

export const hello: QueryResolvers['hello'] = () => {
  return 'Hello World!';
};
