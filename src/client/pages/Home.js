import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
              <div className="home__feature--text">با کیفیت ترین لباس فرم</div>
            </div>
            <div className="home__feature">
              <div className="home__feature--number">۲</div>
              <div className="home__feature--text">تحویل به موقع و منظم</div>
            </div>
            <div className="home__feature">
              <div className="home__feature--number">۳</div>
              <div className="home__feature--text">تطابق دقیق با سایز شما</div>
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
                className="btn btn-primary-medium home__customers--bottom-btn"
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
      <section className="home__gallery"></section>
      <section className="home__story"></section>
      <section className="home__videos">
        <section className="home__register"></section>
        <section className="home__login"></section>
      </section>
      <section className="home__support"></section>
    </div>
  );
};

export default Home;
