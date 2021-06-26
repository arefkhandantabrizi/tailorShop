import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import OrderWarning from "../components/orderWarning";

const utilizeScroll = () => {
  const pantsRef = createRef();
  const executeScroll = () =>
    pantsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return { executeScroll, pantsRef };
};

const utilizeShirtScroll = () => {
  const shirtRef = createRef();

  const executeShirtScroll = () =>
    shirtRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return { executeShirtScroll, shirtRef };
};
class OrderBoyUniform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantsClassName: "order__pants--hidden",
      shirtClassName: "order__shirt--hidden",
    };
    this.pantsScroll = utilizeScroll();
    this.shirtScroll = utilizeShirtScroll();
  }

  pantsClick() {
    this.setState({
      pantsClassName: "order__pants",
      shirtClassName: "order__shirt--hidden",
    });
    setTimeout(() => {
      this.pantsScroll.executeScroll();
    }, 1);
  }

  shirtClick() {
    this.setState({
      pantsClassName: "order__pants--hidden",
      shirtClassName: "order__shirt",
    });
    setTimeout(() => {
      this.shirtScroll.executeShirtScroll();
    }, 1);
  }

  render() {
    return (
      <section className="order-boy-uniform">
        <OrderWarning />
        <h1 className="heading-primary order-boy-uniform--heading">
          سفارش لباس فرم پسرانه
        </h1>
        <div className="order__select">
          <label htmlFor="schoolName" className="order-label">
            نام مدرسه
          </label>
          <select id="schoolName" className="order__select--school"></select>
        </div>
        <div className="order__select">
          <label className="order-label" htmlFor="schoolGrade">
            پایه تحصیلی
          </label>
          <select id="schoolGrade" className="order__select--grade"></select>
        </div>
        <div className="order__items">
          <div className="order__items--pants">
            <img src="" alt="" />
            <Link
              to="#"
              onClick={this.pantsClick.bind(this)}
              className="btn btn-primary-medium order-btn"
            >
              سفارش شلوار
            </Link>
          </div>

          <div className="order__items--shirt">
            <img src="" alt="" />
            <Link
              to="#"
              onClick={this.shirtClick.bind(this)}
              className="btn btn-primary-medium order-btn"
            >
              سفارش بلوز
            </Link>
          </div>
        </div>

        <div
          ref={this.pantsScroll.pantsRef}
          className={this.state.pantsClassName}
        >
          سفارش شلوار
        </div>

        <div
          ref={this.shirtScroll.shirtRef}
          className={this.state.shirtClassName}
        >
          سفارش بلوز
        </div>
      </section>
    );
  }
}

export default OrderBoyUniform;
