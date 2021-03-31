import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import cookie from "react-cookie";

export default (req) => {
  const client = new ApolloClient({
    ssrMode: true,
    connectToDevTools: true,
    link: createHttpLink({
      uri: "http://localhost:4000/graphql",
      fetchOptions: {
        origin: ["http://localhost:3000", "http://localhost:4000 "],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: "include",
      },
      fetch,
      credentials: "include",
      headers: {
        cookie: req.headers.cookie || "",
      },
    }),

    cache: new InMemoryCache(),
  });
  return client;
};
