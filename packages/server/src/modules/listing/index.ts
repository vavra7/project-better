import { getListing } from './resolvers/getResolver';
import { Resolvers } from './typesGenerated';

export const listingResolvers: Resolvers = {
  Query: {
    getListing
  }
};
