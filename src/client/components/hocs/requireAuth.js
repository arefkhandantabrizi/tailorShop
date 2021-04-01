import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../../queries/currentUser";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.data.user) {
        case null:
          return <Redirect to="/" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  return graphql(query)(RequireAuth);
};
