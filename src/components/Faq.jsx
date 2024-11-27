import React from "react";

import bgIcon2 from '../images/bgfaq.svg';
import ellipseFaqRightIcon from '../images/Ellipse-faq-right.svg';
import downwar from '../images/downarrow.svg';
import pluss from '../images/plusicon.svg';
import fcawfrfwq from '../images/fcawfrfwq-footer.svg';
import reddit from '../images/reddit.svg';
import telegram from '../images/telegram.svg';
import twitter from '../images/Twitter.svg';

const Faq = () => {
  return (
    <div>
      <div className="faq">
        <img className="bg-icon2" alt="" src="./images/bgfaq.svg" />
        <div className="rectangle-parent5">
          <div className="group-child8"></div>
          <div className="faqs-parent">
            <div className="faqs1">FAQs</div>
            <div className="line-div"></div>
          </div>
          <img
            className="group-child9"
            alt=""
            src="./images/Ellipse-faq-right.svg"
          />
          <div className="you-receive-your">
            You receive your rewards in ETH instantly once someone you refer
            makes a transaction!
          </div>
        </div>
        <div className="line-parent">
          <div className="group-child10"></div>
          <div className="how-do-i">How do I get a Referral Code?</div>
          <img className="group-child11" alt="" src={pluss} />
        </div>
        <div className="line-group">
          <div className="group-child10"></div>
          <div className="how-do-i">How do I get a Referral Code?</div>
          <img className="group-child11" alt="" src={pluss} />
        </div>
        <div className="line-container">
          <div className="group-child14"></div>
          <div className="do-i-get">
            Do I get rewarded in tokens or ETH when I refer buyers?
          </div>
          <img className="group-child15" alt="" src={downwar} />
        </div>

        {/* Footer Section */}
        <div className="footer">
          <div className="dark-footer-01">
            <div className="group">
              <div className="rectangle"></div>
            </div>
            <img className="fcawfrfwq-2-icon1" alt="" src={fcawfrfwq} />
            <div className="contact-us-parent">
              <div className="contact-us1">
                <span>Contact </span>
                <span className="moonex">Us</span>
              </div>
            </div>

            <div className="footer-logo">
              <a
                className="group-child16"
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>
              <a
                className="group-child16"
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reddit} alt="Reddit" />
              </a>
              <a
                className="group-child16"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>

            <div className="group-parent1">
              <div className="about-us-parent">
                <ul className="nav__list">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
