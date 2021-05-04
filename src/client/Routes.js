import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import requireAuth from "./components/hocs/requireAuth";
import Logout from "./components/logout";
import DashBoard from "./pages/dashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Order from "./pages/Order";
import Register from "./pages/register";

export default () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/order" component={Order} />
        <Route path="/dashboard" component={requireAuth(DashBoard)} />
        <Route path="/notFound" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
      <Footer />
    </Fragment>
  );
};
