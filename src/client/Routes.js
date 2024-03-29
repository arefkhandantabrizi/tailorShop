import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import requireAuth from "./components/hocs/requireAuth";
import Logout from "./components/logout";
import ScrollToTop from "./components/ScrollTop";
import DashBoard from "./pages/dashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Order from "./pages/Order";
import OrderBoyUniform from "./pages/orderBoyUniform";
import Register from "./pages/register";

export default () => {
  return (
    <Fragment>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/order-boy-uniform" component={OrderBoyUniform} />
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
