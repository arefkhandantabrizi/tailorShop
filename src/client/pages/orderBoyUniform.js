import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import OrderWarning from "../components/orderWarning";
import { PersianToEnglish, EnglishToPersian } from "../utility/convertor";
import pants from "../img/pants.webp";
import shirt from "../img/shirt.webp";
import sleeve from "../img/sleeve.webp";
import leg from "../img/leg.webp";
import chest from "../img/chest.webp";
import hip from "../img/hip.webp";
import jacketheight from "../img/jacketheight.webp";
import pantsheight from "../img/pantsheight.webp";
import shoulder from "../img/shoulder.webp";

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
      count: 1,
      pantsHeight: "",
      pantsHip: "",
      pantsLeg: "",
      iamgeSource: "",
    };
    this.pantsScroll = utilizeScroll();
    this.shirtScroll = utilizeShirtScroll();
    this.renderImage = this.renderImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderImage({ currentTarget: input }) {
    const { id } = input;
    switch (id) {
      case "pantsHeight":
        this.setState({ iamgeSource: "./img/pantsheight.webp" });
        break;
      case "pantsHip":
        this.setState({ iamgeSource: "./img/hip.webp" });
        break;
      case "pantsLeg":
        this.setState({ iamgeSource: "./img/leg.webp" });
        break;
    }
  }

  handleChange({ id, value }) {
    const re = /^[0-9\b]+$/;
    let newValue;
    newValue = PersianToEnglish(value);
    if (newValue === "" || re.test(newValue)) {
      switch (id) {
        case "pantsHeight":
          this.setState({ pantsHeight: newValue });
          break;
        case "pantsHip":
          this.setState({ pantsHip: newValue });
          break;
        case "pantsLeg":
          this.setState({ pantsLeg: newValue });
          break;
      }
    }
  }

  pantsClick() {
    this.setState({
      pantsClassName: "order__pants",
      shirtClassName: "order__shirt--hidden",
      iamgeSource: "",
    });
    setTimeout(() => {
      this.pantsScroll.executeScroll();
    }, 1);
  }

  shirtClick() {
    this.setState({
      pantsClassName: "order__pants--hidden",
      shirtClassName: "order__shirt",
      iamgeSource: "",
    });
    setTimeout(() => {
      this.shirtScroll.executeShirtScroll();
    }, 1);
  }

  decreaseCount() {
    let { count } = this.state;
    this.setState({ count: count - 1 });
  }
  increaseCount() {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;
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
            <img src="img/pants.webp" alt="" className="order__image--pants" />
            <Link
              to="#"
              onClick={this.pantsClick.bind(this)}
              className="btn btn-primary-large order-btn"
            >
              سفارش شلوار
            </Link>
          </div>

          <div className="order__items--shirt">
            <img src="img/shirt.webp" alt="" className="order__image--shirt" />
            <Link
              to="#"
              onClick={this.shirtClick.bind(this)}
              className="btn btn-primary-large order-btn"
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
          <hr className="order__pants--seperator" />
          <div className="order__pants--details">
            <div className="order__pants--data">
              <label htmlFor="pantsHeight" className="order__pants--label-1">
                قد شلوار
              </label>
              <input
                id="pantsHeight"
                className="order__pants--input"
                value={EnglishToPersian(this.state.pantsHeight)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="pantsHip" className="order__pants--label-2">
                دور باسن
              </label>
              <input
                id="pantsHip"
                className="order__pants--input"
                value={EnglishToPersian(this.state.pantsHip)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="pantsLeg" className="order__pants--label-3">
                دور ران
              </label>
              <input
                id="pantsLeg"
                className="order__pants--input"
                value={EnglishToPersian(this.state.pantsLeg)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="pantsCount" className="order__pants--label-4">
                تعداد
              </label>
              {count <= 4 ? (
                <button
                  className="btn btn-tertiary-small btn-count"
                  onClick={this.increaseCount.bind(this)}
                >
                  +
                </button>
              ) : (
                <button
                  className="btn  btn-disable-xsmall"
                  onClick={this.increaseCount.bind(this)}
                  disabled={true}
                >
                  +
                </button>
              )}
              <label className="order-count-label">
                {EnglishToPersian(count.toString())}
              </label>
              {count > 1 ? (
                <button
                  className="btn btn-outline-small btn-count"
                  onClick={this.decreaseCount.bind(this)}
                >
                  -
                </button>
              ) : (
                <button
                  className="btn btn-disable-xsmall"
                  onClick={this.decreaseCount.bind(this)}
                  disabled={true}
                >
                  -
                </button>
              )}
            </div>
            <button className="btn btn-primary-large order__pants--btn">
              افزودن به سبد خرید
            </button>
            <img
              src={this.state.iamgeSource}
              alt=""
              className="order__pants--image"
            />
          </div>
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
