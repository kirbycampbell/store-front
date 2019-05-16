import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="inner-nav">
        <div className="left-nav">
          <i className="fas fa-bars bar-btn" />
        </div>
        <div className="title">Vantage Vintage</div>
        <div className="cart-area">
          <i className="fas fa-shopping-cart cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
