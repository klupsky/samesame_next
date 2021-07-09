import { GraphQLClient } from 'graphql-request';

export function request({
   query,
   variables
   // preview
}) {
   const endpoint = process.env.NEXT_SANITY_ENDPOINT;
   const client = new GraphQLClient(endpoint, {
      headers: {
         authorization: `Bearer ${process.env.NEXT_SANITY_TOKEN}`
      }
   });
   return client.request(query, variables);
}
