import React, { useState } from "react";
import "./Footer.css";
import useInterval from "./useInterval";

const Footer = () => {
  const [emailClick, setEmailClick] = useState(false);

  useInterval(
    () => {
      setEmailClick(false);
    },
    emailClick ? 3000 : null
  );

  const emailSignUpClick = () => {
    setEmailClick(true);
  };
  return (
    <div>
      {" "}
      <div className="outer-top-footer">
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
            <div className="rest-of-top-foot">
              <div className="tier2-top-foot">
                Sign Up to receive Email Updates and Discounts!
              </div>
              <div className="tier3-top-foot">
                <input
                  className="email-add-form"
                  placeholder="Email Address"
                  name="email"
                />
                <div className="email-btn" onClick={emailSignUpClick}>
                  Sign Up
                </div>
                {emailClick && (
                  <div className="email-success animated fadeInUp">
                    Success! Thanks for signing up!
                  </div>
                )}
              </div>{" "}
              <div className="tier4-top-foot">We respect your privacy.</div>
            </div>
          </div>
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
