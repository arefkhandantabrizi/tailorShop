import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "@apollo/client/react/hoc";
import mutation from "../mutations/signupMuatation";
import query from "../queries/currentUser";
import AuthForm from "../components/AuthForm";
import "../img/register.webp";

class Register extends Component {
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
      this.props.history.replace("/dashboard");
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

  renderHeader() {
    return (
      <Helmet>
        <title>تولیدی ملینا | ثبت نام </title>
        <meta property="og:title" content="ایجاد حساب کاربری" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localhost:3000/register" />
        <meta
          property="og:image"
          content="https://localhost:3000/img/logo.webp"
        />
      </Helmet>
    );
  }

  render() {
    if (this.props.data.user) {
      return <div> </div>;
    }
    return (
      <section className="login">
        {this.renderHeader()}
        <h1 className="heading-primary">ایجاد حساب کاربری</h1>
        <img className="login__img" src="img/register.webp" alt="" />
        <AuthForm
          formClassName="login__form"
          inputClassName="login__form--input"
          passwordClassName="login__form--input login__form--passwordinput"
          buttonClassName="btn btn-primary login__form--btn"
          buttonText="ثبت نام"
          eyebuttonClassName="login__form--eyebtn"
          lineClassName="login__form--line"
          iconClassName="login__form--icon"
          linkClassName="login__form--link"
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </section>
    );
  }
}

export default graphql(query)(graphql(mutation)(Register));
