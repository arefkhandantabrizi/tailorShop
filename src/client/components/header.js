import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/currentUser";
import Icon from "./icon";
import logo from "../img/logo.webp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderUser() {
    const { user } = this.props.data;

    if (user) {
      return (
        <Fragment>
          <Link className="nav__item--link dropdown--link" to="/dashboard">
            پروفایل کاربری
          </Link>
          <Link className="nav__item--link dropdown--link" to="/logout">
            خروج
          </Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link className="nav__item--link dropdown--link" to="/login">
            ورود به حساب کاربری
          </Link>
          <Link className="nav__item--link dropdown--link" to="/register">
            ثبت نام
          </Link>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <section className="navbar">
        <ul className="nav">
          <div className="sitePart">
            <li className="nav__item">
              <Link className="nav__item--link" to="/home">
                <img
                  className="nav__item--logo"
                  src="img/logo.webp"
                  alt="صفحه اصلی"
                />
              </Link>
            </li>
            <div className="vl" />
            <li className="nav__item">
              <div className="dropdown">
                <div className="nav__item--link dropbtn">سفارش لباس فرم</div>
                <div className="dropdown-content">
                  <Link
                    className="nav__item--link dropdown--link"
                    to="/order-boy-uniform"
                  >
                    لباس فرم پسرانه
                  </Link>
                  <Link className="nav__item--link dropdown--link" to="/order">
                    لباس فرم دخترانه
                  </Link>
                  <Link className="nav__item--link dropdown--link" to="/order">
                    سفارش پارچه
                  </Link>
                </div>
              </div>
            </li>
            <div className="vl" />
            <li className="nav__item">
              <Link className="nav__item--link" to="/gallery">
                گالری ملینا
              </Link>
            </li>
            <div className="vl" />
            <li className="nav__item">
              <Link className="nav__item--link" to="/tracking">
                پیگیری سفارش
              </Link>
            </li>
            <div className="vl" />
            <li className="nav__item">
              <Link className="nav__item--link" to="/submitOrderHelp">
                راهنمای ثبت سفارش
              </Link>
            </li>
            <div className="vl" />
            <li className="nav__item">
              <Link className="nav__item--link" to="/aboutUs">
                درباره ما
              </Link>
            </li>
          </div>
          <div className="userPart">
            <li className="nav__user">
              <div className="dropdown">
                <div className="nav__item--link">
                  <Icon
                    className="nav__item--icon nav__item--icon-user"
                    name="icon-user"
                  />
                </div>
                <div className="dropdown-content">{this.renderUser()}</div>
              </div>
            </li>
            <li className="nav__user">
              <Link className="nav__item--link" to="/cart">
                <Icon
                  className="nav__item--icon nav__item--icon-cart"
                  name="icon-cart"
                />
              </Link>
            </li>
          </div>
        </ul>
      </section>
    );
  }
}

export default graphql(query)(Header);
