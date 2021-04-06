import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../../queries/currentUser";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      const { user } = this.props.data;

      switch (user) {
        case null || undefined:
          return <Redirect to="/login" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  return graphql(query)(RequireAuth);
};
