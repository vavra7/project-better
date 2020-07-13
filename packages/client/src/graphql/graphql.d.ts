declare module '*/test.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const TestQuery: DocumentNode;

  export default defaultDocument;
}
