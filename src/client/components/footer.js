import React from "react";
import Icon from "./icon";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__history">
        <p>
          تولیدی پوشاک ملینا با بیش از ده سال سابقه کاری موفق در زمینه لباس
          مدارس، فعالیت آنلاین خود را در زمان شیوع کرونا از تابستان ۱۳۹۹ آغاز
          کرده و با استقبال والدین از سیستم سفارش آنلاین لباس فرم، وبسایت خود را
          در تابستان ۱۴۰۰ بروز رسانی کرده است.
          <br /> <br /> گالری ملینا از دیگر بخش های این واحد تولیدی می باشد که
          به تولید طراحی های پریسا مظفری در حوزه پوشاک و هنرهای دستی می پردازد.
        </p>
      </div>
      <div className="footer__copyright">
        <p>
          تمامی حق و حقوق © این وب سایت به تولیدی پوشاک ملینا ترشیز تعلق دارد.
          هرگونه کپی برداری پیگرد قانونی دارد.
        </p>
        <p className="footer__copyright--date"> از ۱۳۹۹ </p>
      </div>
      <div className="footer__info">
        <div className="footer__info--tel">
          <Icon name="icon-phone-call" className="footer__icon" />
          <a className="footer__info--tel-link" href="tel:+۹۸۹۰۲۲۸۵۹۸۴۶">
            ۰۹۰۲۲۸۵۹۸۴۶
          </a>
        </div>
        <div className="footer__info--address">
          <Icon name="icon-location" className="footer__icon" />
          خراسان رضوی - کاشمر
        </div>
        <div className="footer__info--socialmedia">
          <p>شما می توانید ما را در شبکه های اجتماعی دنبال کنید</p>
          <a href="https://www.instagram.com/gallerymelina.ir/" target="_blank">
            <Icon name="icon-instagram" className="footer__icon" />
          </a>
          <a href="https://t.me/tolidi_melina" target="_blank">
            <Icon name="icon-telegram" className="footer__icon" />
          </a>
          <a href="https://www.aparat.com/tolidimelina" target="_blank">
            <Icon name="icon-film" className="footer__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
