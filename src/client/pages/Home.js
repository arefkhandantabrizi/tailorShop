import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../img/user1.webp";
import "../img/user2.webp";
import "../img/user3.webp";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeader() {
    return (
      <Helmet>
        <title>تولیدی ملینا</title>
        <meta property="og:title" content="تولیدی ملینا | خانه" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localhost:3000/home" />
        <meta
          property="og:image"
          content="https://localhost:3000/img/logo.webp"
        />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="home">
        {this.renderHeader()}
        <section className="home__header">
          <div className="home__header--image">
            <div className="home__header--text">
              <h1 className="heading-secondary home__header--main">
                خرید لباس مدرسه به صورت آنلاین در تولیدی پوشاک ملینا
              </h1>
              <p className="home__header--subtext">برای اولین بار در منطقه</p>
            </div>
            <Link
              to="/order"
              className="home__header--btn btn btn-primary-medium "
            >
              ثبت سفارش
            </Link>
          </div>
        </section>
        <section className="home__features">
          <section className="home__customers">
            <div className="home__customers--topright">
              <p className="paragraph-starter">همین الان شروع کن!</p>
              <h2 className="home__customers--text">تولیدی پوشاک ملینا</h2>
              <p className="home__customers--subtext">
                برای اولین بار در منطقه، جهت رفاه حال والدین، تمامی مراحل سفارش
                لباس مدرسه را به صورت آنلاین با تحویل درب منزل انجام می دهد.
              </p>
            </div>
            <div className="home__customers--topleft">
              <div className="home__feature">
                <div className="home__feature--number">۱</div>
                <div className="home__feature--text">
                  با کیفیت ترین لباس فرم
                </div>
              </div>
              <div className="home__feature">
                <div className="home__feature--number">۲</div>
                <div className="home__feature--text">تحویل به موقع و منظم</div>
              </div>
              <div className="home__feature">
                <div className="home__feature--number">۳</div>
                <div className="home__feature--text">
                  تطابق دقیق با سایز شما
                </div>
              </div>
              <div className="home__feature">
                <div className="home__feature--number">۴</div>
                <div className="home__feature--text">
                  بدون نیاز به مراجعه حضوری
                </div>
              </div>
            </div>
            <div className="home__customers--bottom">
              <div className="home__customers--bottom-right">
                <p className="paragraph-starter home__customers--bottom-paragraph ">
                  لباسی دقیقا برای شما
                </p>
                <h2 className="home__customers--bottom-text">
                  دوخت سفارشی لباس برای هر دانش آموز
                </h2>
                <p className="home__customers--bottom-subtext">
                  مطابق راهنمای آسان اندازه گیری، سفارش خود را ثبت کنید و لباسی
                  دقیقا با همان اندازه تحویل بگیرید.
                </p>
                <Link
                  className="btn btn-tertiary-medium home__customers--bottom-btn"
                  to="/submitOrderHelp"
                >
                  راهنمای اندازه گیری لباس
                </Link>
              </div>
              <div className="home__customers--bottom-image" />
              <div className="home__customers--bottom-imagetopleft" />
              <p className="home__customers--bottom-subtextleft">
                راهنمای اندازه گیری بسیار آسان است و هر فرد می تواند در منزل
                اندازه گیری کند.
              </p>
              <div className="home__customers--bottom-imagebottomleft" />
            </div>
          </section>
        </section>
        <section className="home__gallery">
          <div className="home__gallery--text">
            <p className="paragraph-starter home__gallery--starter">
              گالری لباس و هنرهای دستی ملینا
            </p>
            <h2 className="home__gallery--header">
              تولیدات دیگر گالری ملینا با طراحی های اختصاصی پریسا مظفری
            </h2>
          </div>
          <div className="home__gallery--items">
            <div className="home__gallery--items-item">
              <div className="home__gallery--items-item-img" />
              <h5 className="home__gallery--items-item-name">نام محصول</h5>
              <div className="home__gallery--items-item-description">
                <p>مشخصات</p>
              </div>
              <Link to="/gallery" className="home__gallery--items-item-btn">
                بیشتر
              </Link>
            </div>

            <div className="home__gallery--items-item">
              <div className="home__gallery--items-item-img" />
              <h5 className="home__gallery--items-item-name">نام محصول</h5>
              <div className="home__gallery--items-item-description">
                <p>مشخصات</p>
              </div>
              <Link to="/gallery" className="home__gallery--items-item-btn">
                بیشتر
              </Link>
            </div>

            <div className="home__gallery--items-item">
              <div className="home__gallery--items-item-img" />
              <h5 className="home__gallery--items-item-name">نام محصول</h5>
              <div className="home__gallery--items-item-description">
                <p>مشخصات</p>
              </div>
              <Link to="/gallery" className="home__gallery--items-item-btn">
                بیشتر
              </Link>
            </div>
          </div>
          <Link to="/gallery" className="home__gallery--all">
            تمامی محصولات &larr;
          </Link>
        </section>
        <section className="home__story">
          <div className="home__story--text">
            <p className="paragraph-starter home__story--starter">
              برخی از نظرات
            </p>
            <h2 className="home__story--header">مشتریان تولیدی ملینا </h2>
          </div>

          <div className="home__story--container">
            <div className="story">
              <figure className="story__shape">
                <img src="img/user1.webp" alt="" className="story__img" />
                <figcaption className="story__caption"> کاربر ملینا</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="story__heading">خیلی کارتون با کیفیته</h3>
                <p>
                  من مشتری قدیمی ملینا هستم. سه ساله لباس مدرسه پسرم رو از ملینا
                  میگیریم. کیفیتشون عالیه!
                </p>
              </div>
            </div>

            <div className="story">
              <figure className="story__shape">
                <img src="img/user2.webp" alt="" className="story__img" />
                <figcaption className="story__caption"> کاربر ملینا</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="story__heading">دقیقا اندازه بود</h3>
                <p>
                  فکر نمیکردم با اندازه گیری تو خونه، لباس خوب باشه. اما لباس
                  دقیقا سایزی بود که سفارش دادم و کاملا اندازه بود. مرسی
                </p>
              </div>
            </div>

            <div className="story">
              <figure className="story__shape">
                <img src="img/user3.webp" alt="" className="story__img" />
                <figcaption className="story__caption"> کاربر ملینا</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="story__heading">اینجوری خیلی راحتره</h3>
                <p>
                  تو دوران کرونا خیلی خوبه که رفت و آمد ها کم شده و میشه آنلاین
                  لباس فرم مدرسه سفارش داد.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home__videos">
          <div className="home__videos--text">
            <p className="paragraph-starter home__videos--starter">
              ویدیو آموزشی
            </p>
            <h2 className="home__videos--header">
              برای ثبت سفارش آسان تر، ویدیو های ملینا را ببینید.
            </h2>
          </div>
          <div className="home__videos--container">
            <div className="home__videos--wrapper">
              <div className="home__videos--video" />
              <Link to="" className="btn home__videos--btn btn-tertiary">
                دیدن
              </Link>
            </div>
            <div className="home__videos--wrapper">
              <div className="home__videos--video" />
              <Link to="" className="btn home__videos--btn btn-tertiary">
                دیدن
              </Link>
            </div>
          </div>

          <section className="home__register">
            <div className="home__register-right">
              <div className="home__register--text">
                <p className="paragraph-starter home__register--starter">
                  سیستم آنلاین
                </p>
                <h2 className="home__register--header">
                  سفارش لباس فرم مدرسه ملینا
                </h2>
                <p className="home__register--paragraph">
                  علاوه بر تحویل درب منزل مانتو و شلوار ، این امکان را برای شما
                  فراهم می کند تا از وضعیت سفارش خرید خود به صورت لحظه ای اطلاع
                  حاصل نمایید. کافیست به حساب کاربری خود در سایت تولیدی ملینا
                  وارد شوید و وضعیت خرید لباس مدرسه را مشاهده کنید.
                </p>
              </div>
            </div>
            <div className="home__register-left">
              <div className="home__register--img" />
            </div>
          </section>

          <section className="home__login">
            <div className="home__login--text">
              <p className="paragraph-starter home__login--starter">
                همین الان ثبت نام کن
              </p>
              <h2 className="home__login--header">
                بهره مندی از تمامی امکانات سایت و پنل کاربری با ثبت نام در
                سامانه
              </h2>
            </div>
            <Link to="/register" className="btn btn-secondary home__login--btn">
              ثبت نام
            </Link>
          </section>
        </section>
        <section className="home__support">
          <div className="home__support--text">
            <p className="paragraph-starter home__support--starter">
              تیم پشتیبانی حرفه ای ملینا
            </p>
            <h2 className="home__support--header">
              در تمامی مراحل سفارش و خرید لباس مدارس در کنار والدین محترم بوده و
              به تمام سوالات احتمالی در سریع ترین زمان ممکن پاسخ می دهند.
            </h2>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
