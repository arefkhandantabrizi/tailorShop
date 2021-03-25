import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import mutation from "../mutations/loginMutation";
import query from "../queries/currentUser";
import AuthForm from "./AuthForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  UNSAFE_componentWillUpdate(nextProps) {
    console.log(nextProps, this.props.data);
    if (!this.props.data.user && nextProps.data.user) {
    }
  }
  onSubmit({ username, password }) {
    this.props
      .mutate({
        variables: {
          username,
          password,
        },
        refetchQueries: [{ query }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h1>ورود</h1>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(Login));
