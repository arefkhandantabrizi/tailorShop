import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

export default (req) => {
  const client = new ApolloClient({
    ssrMode: true,
    connectToDevTools: true,
    link: createHttpLink({
      uri: "http://localhost:4000/graphql",
      fetch,
      fetchOptions: {
        origin: ["http://localhost:3000", "http://localhost:4000 "],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: "include",
      },
      credentials: "include",
    }),
    headers: {
      cookie: req.get("cookie") || "",
    },
    cache: new InMemoryCache(),
  });

  return client;
};
