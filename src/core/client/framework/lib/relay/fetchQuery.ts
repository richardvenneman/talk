import {
  CacheConfig,
  Environment,
  fetchQuery as relayFetchQuery,
  GraphQLTaggedNode,
  Variables,
} from "relay-runtime";

import extractPayload from "./extractPayload";

export default async function fetchQuery<R = any>(
  environment: Environment,
  taggedNode: GraphQLTaggedNode,
  variables: Variables,
  cacheConfig?: CacheConfig
): Promise<R> {
  const result = await relayFetchQuery(
    environment,
    taggedNode,
    variables,
    cacheConfig
  );
  return extractPayload(result);
}
