import React from "react";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="navbar">
      <div className="inner-nav">
        <div className="left-nav">
          <i className="fas fa-bars bar-btn" />
        </div>
        <div className="title">Vantage Vintage</div>
        <div className="heart-cart-cont">
          <div className="cart-area">
            <div className="heart-cont" onClick={props.handleLikeFilter}>
              <i className="fas fa-shopping-cart cart-icon" />
              {props.likeList.length > 0 && props.likeList.length}
            </div>
            {/* <i className="fas fa-shopping-cart cart-icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
