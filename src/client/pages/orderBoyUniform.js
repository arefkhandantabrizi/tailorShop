import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/icon";

class OrderBoyUniform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  renderWarning() {
    const { show } = this.state;
    let showing = show ? false : true;

    this.setState({ show: showing });
  }

  render() {
    const { show } = this.state;
    return (
      <section className="order-boy-uniform">
        <div className={show === true ? "order-warning" : "no-warning"}>
          <div className={show === true ? "order-warning--text" : "no-warning"}>
            <span
              className={show === true ? "order-warning--text" : "no-warning"}
            >
              حتما قبل از سفارش،
            </span>
            <Link
              to=""
              className={show === true ? "order-warning--link" : "no-warning"}
            >
              &nbsp; راهنمایی ثبت اندازه گیری
            </Link>
            <span
              className={show === true ? "order-warning--text" : "no-warning"}
            >
              &nbsp; را مطالعه فرمایید.
            </span>
          </div>
          <div
            onClick={this.renderWarning.bind(this)}
            className={show === true ? "icon-container" : "no-warning"}
          >
            <Icon
              className={show === true ? "order-icon" : "no-warning"}
              name="icon-x"
            />
          </div>
        </div>
        <h1 className="heading-primary order-boy-uniform--heading">
          سفارش لباس فرم پسرانه
        </h1>
        <label htmlFor="schoolName" className="order-label">
          نام مدرسه
        </label>
        <select id="schoolName" className="order-select"></select>
        <label className="order-label" htmlFor="schoolGrade">
          پایه تحصیلی
        </label>
        <select id="schoolGrade" className="order-select"></select>
      </section>
    );
  }
}

export default OrderBoyUniform;
