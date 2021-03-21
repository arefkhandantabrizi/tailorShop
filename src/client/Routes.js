import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/notFound" component={() => "Not Found"} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
};
