import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>I am the BEST home component</div>
      <Link style={{ display: "block" }} to="/buyers">
        خریداران
      </Link>
      <Link style={{ display: "block" }} to="/dashboard">
        داشبورد کاربر
      </Link>
      <button onClick={() => console.log("well done")}>Press me!</button>
    </div>
  );
};

export default Home;
