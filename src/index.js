import express from "express";
import React from "react";
import { createProxyMiddleware } from "http-proxy-middleware";
import { renderToString } from "react-dom/server";
import { ApolloProvider } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { StaticRouter } from "react-router-dom";
import { Html } from "./helpers/html";
import createClient from "./helpers/createClinet";
import Routes from "./client/Routes";

const app = express();

app.use(
  "/graphql",
  createProxyMiddleware({
    target: "http://localhost:4000/graphql",
    changeOrigin: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const client = createClient(req);

  const context = {};
  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.path} context={context}>
        <Routes />
      </StaticRouter>
    </ApolloProvider>
  );

  getDataFromTree(App).then((content) => {
    const initialState = client.extract();

    const html = <Html content={content} state={initialState} />;

    res.send(`<!doctype html>\n${renderToString(html)}`);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listining on port ${port}...`);
});
