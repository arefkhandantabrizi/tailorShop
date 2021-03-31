import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import cookie from "react-cookie";
import {
  ApolloProvider,
  createHttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "include",
  // headers: {
  //   cookie: cookie.load("tldm") || "",
  // },
});

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link,
});

// const client = new ApolloClient({
//   cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
//   credentials: "include",
//   uri: "/graphql",
//   headers: {
//     cookie: localStorage.getItem("Cookie"),
//   },
// });

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>,
  document.querySelector("#root")
);
