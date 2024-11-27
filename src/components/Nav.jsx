import React from "react";
// You need to import images if you're using them
import dewfewefwef2Icon from '../images/dewfwefwef 2.png';
import fcawfrfwq1Icon from '../images/fcawfrfwq 1.png';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="names">
        <ul className="nav__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="connect">
        <div className="connect-child"></div>
        <div className="connect-wallet">
          <a href="#">Connect Wallet</a>
        </div>
      </div>
      <div className="logo">
        <img
          className="dewfwefwef-2-icon"
          alt="Logo 1"
          src={dewfewefwef2Icon} // Ensure this path is correct
        />
        <img
          className="fcawfrfwq-1-icon"
          alt="Logo 2"
          src={fcawfrfwq1Icon} // Ensure this path is correct
        />
      </div>
    </div>
  );
};

export default Nav;
