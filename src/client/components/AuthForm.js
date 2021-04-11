import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./icon";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      iconName: "icon-eye",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.onSubmit({ username, password });
  }

  renderError() {
    return (
      <div className="error">
        {this.props.errors.map((error) => {
          switch (error) {
            case "user validation failed: username: username must be longer than 5 characters.":
              return (
                <div key={error}>نام کاربری باید بیشتر از ۵ کاراکتر باشد</div>
              );
            case "user validation failed: password: password must be longer than 5 characters.":
              return (
                <div key={error}>رمزعبور باید بیشتر از ۵ کاراکتر باشد</div>
              );
            case "You must provide an username and password.":
              return (
                <div key={error}>
                  وارد کردن نام کاربری و رمزعبور اجباری است.
                </div>
              );
            case "username in use":
              return (
                <div key={error}>
                  این نام کاربری قبلا استفاده شده است لطفا نام کاربری دیگری وارد
                  کنید.
                </div>
              );
            case `Unexpected error value: "نام کاربری یا رمز عبور اشتباه است."`:
              return <div key={error}>نام کاربری یا رمز عبور اشتباه است. </div>;
            default:
              return <div key={error}>{error}</div>;
          }
        })}
      </div>
    );
  }

  renderIcon() {
    let { iconName } = this.state;

    if (iconName === "icon-eye") {
      iconName = "icon-eye-off";
    } else {
      iconName = "icon-eye";
    }
    this.setState({ iconName });
  }

  renderLink() {
    if (this.props.buttonText === "ورود") {
      return (
        <Link className={this.props.linkClassName} to="/register">
          حساب کاربری ندارید؟ حساب خود را ایجاد کنید.
        </Link>
      );
    } else {
      return (
        <Link className={this.props.linkClassName} to="/login">
          ورود به حساب کاربری
        </Link>
      );
    }
  }

  render() {
    return (
      <div className={this.props.formClassName}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <input
              className={this.props.inputClassName}
              placeholder="نام کاربری"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="login__form--password">
            <input
              className={this.props.passwordClassName}
              placeholder="رمزعبور"
              type={this.state.iconName === "icon-eye" ? "password" : "text"}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button
              type="button"
              className={this.props.eyebuttonClassName}
              onClick={this.renderIcon.bind(this)}
            >
              <Icon
                className={this.props.iconClassName}
                name={this.state.iconName}
              />
            </button>
          </div>
          {this.renderError()}

          <button type="submit" className={this.props.buttonClassName}>
            {this.props.buttonText}
          </button>
        </form>

        <hr className={this.props.lineClassName} />
        {this.renderLink()}
      </div>
    );
  }
}

export default AuthForm;
