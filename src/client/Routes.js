import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Buyer from "./components/buyer";
import Home from "./components/Home";
import Login from "./components/login";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/buyers" component={Buyer} />
        <Route path="/login" component={Login} />
        <Route path="/notFound" component={() => "Not Found"} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
};
