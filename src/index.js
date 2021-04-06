import express from "express";
import compression from "compression";
import React from "react";
import { Helmet } from "react-helmet";
import { createProxyMiddleware } from "http-proxy-middleware";
import { renderToString } from "react-dom/server";
import { ApolloProvider } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { StaticRouter } from "react-router-dom";
import { Html } from "./helpers/html";
import createClient from "./helpers/createClinet";
import Routes from "./client/Routes";
import headerLogo from "./client/img/headLogo.webp";

const app = express();

app.use(compression());

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

    const bodyContent = `${renderToString(html)}`;

    const helmet = Helmet.renderStatic();

    const result = `<!doctype html>\n<html lang="fa"><head><meta charset="utf-8" /><meta name="theme-color" content="#422671"><meta name="تولیدی پوشاک ملینا ترشیز" content="این وب سایت برای ثبت سفارش دوخت لباس فرم مدارس طراحی شده است"> <link rel="stylesheet" href="style.css" /><link rel="icon" href="img/headLogo.webp"/> <meta name="viewport" content="width=device-width, initial-scale=1" /> ${helmet.title.toString()}${helmet.meta.toString()}</head>${bodyContent}</html>`;

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(result);
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listining on port ${port}...`);
});
