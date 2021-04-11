import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import mutation from "../mutations/logoutMutation";
import query from "../queries/currentUser";
import { Link } from "react-router-dom";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.history.replace("/");
  }

  logout() {
    this.props
      .mutate({
        refetchQueries: [{ query }],
      })
      .catch((res) => {
        //   const errors = res.graphQLErrors.map((error) => error.message);
        //   this.setState({ errors });
      });
  }

  render() {
    {
      this.logout();
    }
    return <Link to="/" />;
  }
}

export default graphql(mutation)(LogOut);
