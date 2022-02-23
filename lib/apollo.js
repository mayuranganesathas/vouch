import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react";

const devURI = "https://dev-zerglings.hasura.app/v1/graphql";
const prodURI = "https://zerglings-1.hasura.app/v1/graphql";

export const dbUri = () => {
  let activateDev = true;
  //change to false for production
  if (activateDev)
    return {
      uri: devURI,
      secret: process.env.NEXT_PUBLIC_HASURA_DEV,
      subDomain: "dev",
    };
  else
    return {
      uri: prodURI,
      secret: process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
      subDomain: "app",
    };
};

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: dbUri().uri,
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": dbUri().secret,
      },
    }),
    cache: new InMemoryCache(),
  });
};

let apolloClient;

export default function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ? apolloClient : createApolloClient();

  // if initialState
  if (initialState) {
    const existingCache = _apolloClient.extract();
    // restore cache
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // if the mode is ssr
  if (typeof window === "undefined") return _apolloClient;

  // create client once on the frontend
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
