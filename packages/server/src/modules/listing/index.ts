import { QueryResolvers } from './modelGenerated';
import { getListing } from './resolvers/getResolver';

export const listingQuery: QueryResolvers = {
  getListing
};
