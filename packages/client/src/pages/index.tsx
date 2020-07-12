import { NextPage } from 'next';
import Apollo from '../lib/apollo';
import { TestQuery } from '../graphql/test.graphql';

const Index: NextPage = props => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
};

Index.getInitialProps = async () => {
  const apolloClient = Apollo.getClient();
  const { data } = await apolloClient.query({ query: TestQuery });

  return {
    data
  };
};

export default Index;
