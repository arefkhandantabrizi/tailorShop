import React from "react";
import { Link } from "react-router-dom";
import "../img/girl.webp";
import "../img/boy.webp";
import "../img/fabric.webp";

const Order = () => {
  return (
    <section className="order">
      <h1 className="heading-primary"> سفارش لباس فرم و پارچه</h1>
      <div className="order-types">
        <div className="order-type">
          <div className="order-image order-image--girl" />
          <Link
            to="/order-girl-uniform"
            className="btn btn-primary-medium order-btn"
          >
            دخترانه
          </Link>
        </div>
        <div className="order-type">
          <div className="order-image order-image--boy" />
          <Link
            to="/order-boy-uniform"
            className="btn btn-primary-medium order-btn"
          >
            پسرانه
          </Link>
        </div>
        <div className="order-type">
          <div className="order-image order-image--fabric" />
          <Link
            to="/order-fabrics"
            className="btn btn-primary-medium order-btn"
          >
            پارچه
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Order;
