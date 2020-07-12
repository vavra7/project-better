import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

class Apollo {
  public static getClient(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
      link: new HttpLink({
        uri: 'http://localhost:4000/graphql'
      }),
      cache: new InMemoryCache()
    });
  }
}

export default Apollo;
