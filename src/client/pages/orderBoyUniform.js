import React, { Component, createRef, Fragment } from "react";
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
      shirtHeight: "",
      shirtChest: "",
      shirtHip: "",
      sleeve: "",
      shoulder: "",
      pantsHeight: "",
      pantsHip: "",
      pantsLeg: "",
      iamgeSource: "",
      text: "",
      flag: false,
    };
    this.pantsScroll = utilizeScroll();
    this.shirtScroll = utilizeShirtScroll();
    this.renderImage = this.renderImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  renderImage({ currentTarget: input }) {
    const { id } = input;
    switch (id) {
      case "pantsHeight":
        this.setState({
          iamgeSource: "./img/pantsheight.webp",
          text: "از خطی که کمر شلوار مورد نظر قرار می گیرد تا قد دلخواه را اندازه گیری کنید. توصیه می کنیم قد شلوار را تا روی زمین اندازه گیری کنید که قد شلوار تا انتهای سال تحصیلی برای دانش آموز مناسب باشد.",
        });
        break;
      case "pantsHip":
        this.setState({
          iamgeSource: "./img/hip.webp",
          text: "متر را روی برجستگی باسن قرار داده و جلو اندام به هم حلقه کنید. دقت کنید. اگر دانش آموز شکم بزرگ تر از باسن دارد، متر خیاطی را پس از رد کردن از دور باسن، اندکی به سمت بالا بکشید تا جلوی متر به صورت مورب قرار بگیرد و حجم شکم را نیز شامل شود",
        });
        break;
      case "pantsLeg":
        this.setState({
          iamgeSource: "./img/leg.webp",
          text: "دور برآمده ترین قسمت ران را اندازه گیری کنید. نه خیلی آزاد و نه خیلی چسب. متر باید اندکی چرخش داشته باشد",
        });
        break;
      case "shirtHeight":
        this.setState({
          iamgeSource: "./img/jacketheight.webp",
          text: "متر را کنار گردن گذاشته و قد لباس را تا برآمدگی انگشت شصت دانش آموز اندازه بگیرید. متداول است قد لباس فرم پسرانه تا انگشت شصت ایشان (زمانی که دست خود را کنار بدن قرار می دهند) اندازه گیری شود.",
        });
        break;
      case "shirtChest":
        this.setState({
          iamgeSource: "./img/chest.webp",
          text: "ابتدا متر خیاطی را از زیر بغل تا روی برجستگی سینه قرار داده و آن را بین دوسینه به هم می رسانیم به گونه ای که سینه فشرده نشود و متر چرخش مختصری داشته باشد",
        });
        break;
      case "shirtHip":
        this.setState({
          iamgeSource: "./img/hip.webp",
          text: "متر را روی برجستگی باسن قرار داده و جلو اندام به هم حلقه کنید. دقت کنید. اگر دانش آموز شکم بزرگ تر از باسن دارد، متر خیاطی را پس از رد کردن از دور باسن، اندکی به سمت بالا بکشید تا جلوی متر به صورت مورب قرار بگیرد و حجم شکم را نیز شامل شود",
        });
        break;
      case "sleeve":
        this.setState({
          iamgeSource: "./img/sleeve.webp",
          text: "دست را کمی خم کرده، ابتدای متر را روی نقطه برآمده سرشانه قرار داده و تا برآمدگی مچ اندازه گیری کنید",
        });
        break;
      case "shoulder":
        this.setState({
          iamgeSource: "./img/shoulder.webp",
          text: "هنگام اندازه گیری تمام شانه ، از روی نقطه برآمدگی سرشانه چپ تا نقطه برآمدگی سر شانه راست را از پشت اندازه گیری کنید و اجازه دهید متر روی بدن به راحتی قرار بگیرد",
        });
        break;
    }
  }

  handleChange({ id, value }) {
    const re = /^[0-9\b]+$/;
    let newValue;
    newValue = PersianToEnglish(value);
    if ((newValue === "" || re.test(newValue)) && newValue.length <= 3) {
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
        case "shirtHeight":
          this.setState({ shirtHeight: newValue });
          break;
        case "shirtChest":
          this.setState({ shirtChest: newValue });
          break;
        case "shirtHip":
          this.setState({ shirtHip: newValue });
          break;
        case "sleeve":
          this.setState({ sleeve: newValue });
          break;
        case "shoulder":
          this.setState({ shoulder: newValue });
          break;
      }
    }
  }

  pantsClick() {
    this.setState({
      pantsClassName: "order__pants",
      shirtClassName: "order__shirt--hidden",
      iamgeSource: "",
      text: "",
      count: 1,
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
      text: "",
      count: 1,
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

  renderButton() {
    const { count } = this.state;
    return (
      <Fragment>
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
      </Fragment>
    );
  }

  submitOrder() {
    console.log("Submit");

    // this.setState({ flag: true });
    // setTimeout(() => {
    //   this.setState({ flag: false });
    // }, 30000);
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
                className="input__order--details"
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
                className="input__order--details"
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
                className="input__order--details"
                value={EnglishToPersian(this.state.pantsLeg)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="pantsCount" className="order__pants--label-4">
                تعداد
              </label>
              {this.renderButton()}
            </div>
            <button
              onClick={() => this.submitOrder()}
              className="btn btn-primary-large order__pants--btn"
            >
              افزودن به سبد خرید
            </button>
            <img
              src={this.state.iamgeSource}
              alt=""
              className="order__pants--image"
            />
            {this.state.text && (
              <p className="order__pants--text">
                توجه:
                <br />
                {this.state.text}
              </p>
            )}
          </div>
        </div>
        <div
          ref={this.shirtScroll.shirtRef}
          className={this.state.shirtClassName}
        >
          سفارش بلوز
          <hr className="order__pants--seperator" />
          <div className="order__pants--details">
            <div className="order__pants--data">
              <label htmlFor="shirtHeight" className="order__shirt--label-1">
                قد بلوز
              </label>
              <input
                id="shirtHeight"
                className="input__order--details"
                value={EnglishToPersian(this.state.shirtHeight)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="shirtChest" className="order__shirt--label-2">
                دور سینه
              </label>
              <input
                id="shirtChest"
                className="input__order--details"
                value={EnglishToPersian(this.state.shirtChest)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>

            <div className="order__pants--data">
              <label htmlFor="shirtHip" className="order__shirt--label-3">
                دور باسن
              </label>
              <input
                id="shirtHip"
                className="input__order--details"
                value={EnglishToPersian(this.state.shirtHip)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="sleeve" className="order__shirt--label-4">
                قد آستین
              </label>
              <input
                id="sleeve"
                className="input__order--details"
                value={EnglishToPersian(this.state.sleeve)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>
            <div className="order__pants--data">
              <label htmlFor="shoulder" className="order__shirt--label-5">
                تمام شانه
              </label>
              <input
                id="shoulder"
                className="input__order--details"
                value={EnglishToPersian(this.state.shoulder)}
                onClick={(id) => this.renderImage(id)}
                onChange={(e) => this.handleChange(e.target)}
              />
            </div>

            <div className="order__pants--data">
              <label htmlFor="pantsCount" className="order__shirt--label-6">
                تعداد
              </label>
              {this.renderButton()}
            </div>
            <button
              onClick={() => this.submitOrder()}
              className="btn btn-primary-large order__pants--btn"
            >
              افزودن به سبد خرید
            </button>
            <img
              src={this.state.iamgeSource}
              alt=""
              className="order__pants--image"
            />
            {this.state.text && (
              <p className="order__pants--text">
                توجه:
                <br />
                {this.state.text}
              </p>
            )}
          </div>
        </div>
      </section>
    );
    {
      /* <div className="popup" id="popup">
          <div className="popup__content">
            <Loader />
            <div className="popup__left">
              {/* <img
                src="img/nat-8.jpg"
                alt="tour photo"
                className="popup__img"
              />
              <img
                src="img/nat-9.jpg"
                alt="tour photo"
                className="popup__img"
              />
            </div> *
              <div className="popup__right">
                <a href="#" className="popup__close">
                  &times;
                </a>
              </div>
              <h2 className="heading-secondary u-margin-bottom-small">
                Start booking now
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read this term before booking
              </h3>
              <p className="popup__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quisquam accusamus quae hic atque ad doloribus, sequi, autem
                soluta eveniet voluptatum explicabo? Harum beatae suscipit,
                necessitatibus nihil exercitationem recusandae vero Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quidem quisquam
                accusamus quae hic atque ad doloribus, cipit, necessitatibus
                nihil exercitationem recusandae vero!
              </p>
              <a href="#" className="btn btn--green">
                Book now
              </a>
            </div>
          </div>
        </div>
      </Fragment> */
    }
  }
}

export default OrderBoyUniform;
