import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./icon";

const OrderWarning = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? "order-warning" : "no-warning"}>
      <div className="order-warning--text">
        <span>حتما قبل از سفارش،</span>
        <Link to="#" className="order-warning--link">
          &nbsp; راهنمای ثبت اندازه گیری
        </Link>
        <span>&nbsp; را مطالعه فرمایید.</span>
      </div>
      <div
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
        className="icon-container"
      >
        <Icon className="order-icon" name="icon-x" />
      </div>
    </div>
  );
};

export default OrderWarning;
