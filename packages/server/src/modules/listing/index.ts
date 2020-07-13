import { QueryResolvers } from './typesGenerated';
import { getListing } from './resolvers/getResolver';

export const listingQuery: QueryResolvers = {
  getListing
};
