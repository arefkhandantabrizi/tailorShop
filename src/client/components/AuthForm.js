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
        {this.props.errors.map((error) => (
          <div key={error}>{error}</div>
        ))}
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
            ورود
          </button>
        </form>

        <hr className={this.props.lineClassName} />
        <Link className={this.props.linkClassName} to="/register">
          حساب کاربری ندارید؟ حساب خود را ایجاد کنید.
        </Link>
      </div>
    );
  }
}

export default AuthForm;
