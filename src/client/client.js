import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import {
  ApolloProvider,
  createHttpLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import "./css/style.css";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link,
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>,
  document.querySelector("#root")
);
