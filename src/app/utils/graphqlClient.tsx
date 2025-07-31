// utils/graphqlClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    // Add auth headers if needed
  },
});
