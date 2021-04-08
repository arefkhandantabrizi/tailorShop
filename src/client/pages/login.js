import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import mutation from "../mutations/loginMutation";
import query from "../queries/currentUser";
import AuthForm from "../components/AuthForm";
import login from "../img/login.webp";

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
      <div className="login">
        <h1 className="login__header">ورود به حساب کاربری</h1>
        <img className="login__img" src="img/login.webp" />
        <AuthForm
          formClassName="login__form"
          inputClassName="login__form--input"
          passwordClassName="login__form--input login__form--passwordinput"
          buttonClassName="btn btn-primary login__form--btn"
          eyebuttonClassName="login__form--eyebtn"
          lineClassName="login__form--line"
          iconClassName="login__form--icon"
          linkClassName="login__form--link"
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(Login));
