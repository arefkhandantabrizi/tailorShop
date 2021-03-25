import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

export default (req) => {
  const client = new ApolloClient({
    ssrMode: true,
    connectToDevTools: true,
    link: createHttpLink({
      uri: "http://localhost:4000/graphql",
      fetch,
      credentials: "same-origin",
      headers: {
        cookie: req.header("Cookie"),
      },
    }),
    cache: new InMemoryCache(),
  });
  return client;
};
