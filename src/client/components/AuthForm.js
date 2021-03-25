import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
  }

  onSubmit(event) {
    const { username, password } = this.state;

    event.preventDefault();

    this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <input
              placeholder="نام کاربری"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder="رمزعبور"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="error">
            {this.props.errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className="btn">ورود</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
