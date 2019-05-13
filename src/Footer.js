import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="footer-cont">
        <div className="top-foot-outer">
          <div className="top-bar">
            <div className="inner-topbar-left">
              Subscribe to Vantage Vintage
            </div>
            <div className="inner-topbar-right">
              <i className="fab fa-instagram social" />
              <i className="far fa-envelope social" />
              <i className="fab fa-facebook-f social" />
            </div>
          </div>
          <div className="rest-of-top-foot">rest of top foot</div>
        </div>
      </div>
      <div className="bottom-footer-cont">
        <p className="bot-foot-title">Vantage Vintage</p>
        <p className="bot-foot-hours">Open 24/7 Online.</p>

        <p className="bot-foot-designedby">
          Crafted by <strong className="name">Kirby Campbell.</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
