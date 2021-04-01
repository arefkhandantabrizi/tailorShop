import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import mutation from "../mutations/loginMutation";
import query from "../queries/currentUser";
import AuthForm from "../components/AuthForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentDidMount() {
    if (this.props.data.user) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(preProps) {
    if (this.props.data.user && !preProps.data.user) {
      this.props.history.push("/");
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
    if (this.props.data.user) {
      return <div> </div>;
    }
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
