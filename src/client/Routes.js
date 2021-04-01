import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import requireAuth from "./components/hocs/requireAuth";
import Buyer from "./pages/buyer";
import DashBoard from "./pages/dashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import NotFound from "./pages/notFound";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/buyers" component={Buyer} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={requireAuth(DashBoard)} />
        <Route path="/notFound" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
};
