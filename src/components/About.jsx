import React from "react";
import fcawfrfwq2Icon from "../images/fcawfrfwq 222.png";
import uniswapLogoIcon from "../images/2560px-Uniswap_Logo_and_Wordmark 1.png";
import fcawfrfwq1Icon1 from "../images/fcawfrfwq 22.png";
import checkBoldIcon from "../images/check_bold.svg";
import bgIcon1 from "../images/bg1.svg";
import group19_1Icon from "../images/Group 19_1.svg";
import group19_2Icon from "../images/Group 19_2.svg";
import group19_3Icon from "../images/Group 19_3.svg"; 
import group19_4Icon from "../images/Group 19_4.svg";

const About = () => {
  return (
    <div>
      <div className="about">
        <img className="bg-icon1" alt="Background Icon" src={bgIcon1} />
        <div className="why-moonex-container">
          <span>Why </span>
          <span className="moonex">MoonEX</span>
          <span> ?</span>
        </div>
        <div className="about-inner">
          <div className="rectangle-container">
            <div className="group-inner"></div>
            <div className="px-uniswap-logo-and-wordmark-1-parent">
              <img
                className="px-uniswap-logo-and-wordmark-1-icon"
                alt="Uniswap Logo"
                src={uniswapLogoIcon}
              />
              <div className="fcawfrfwq-1-parent">
                <img
                  className="fcawfrfwq-1-icon1"
                  alt="fcawfrfwq-1"
                  src={fcawfrfwq1Icon1}
                />
                <img
                  className="fcawfrfwq-2-icon"
                  alt="fcawfrfwq-2"
                  src={fcawfrfwq2Icon}
                />
              </div>
              <div className="comparison">Comparison</div>
            </div>
            <div className="group-container">
              <div className="group-div">
                <div className="rectangle-div"></div>
                <div className="point-no-one">1 . Point no one</div>
                <img
                  className="basic-check-bold"
                  alt="Check Bold"
                  src={checkBoldIcon}
                />
              </div>
              <div className="rectangle-parent1">
                <div className="rectangle-div"></div>
                <div className="point-no-one">2 . Point no two this</div>
                <img
                  className="basic-check-bold"
                  alt="Check Bold"
                  src={checkBoldIcon}
                />
              </div>
              <div className="rectangle-parent2">
                <div className="rectangle-div"></div>
                <div className="point-no-one">3 . Point no three</div>
                <img
                  className="basic-check-bold"
                  alt="Check Bold"
                  src={checkBoldIcon}
                />
              </div>
              <div className="rectangle-parent3">
                <div className="rectangle-div"></div>
                <div className="point-no-one">4 . Point no four</div>
                <img
                  className="basic-check-bold"
                  alt="Check Bold"
                  src={checkBoldIcon}
                />
              </div>
              <div className="rectangle-parent4">
                <div className="rectangle-div"></div>
                <div className="point-no-one">5 . Point no five</div>
                <img
                  className="basic-check-bold"
                  alt="Check Bold"
                  src={checkBoldIcon}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="our-features">
          <span>Our </span>
          <span className="moonex">Features</span>
        </div>
        <div className="cardd-parent">
          <div className="cardd">
            <div className="feature-1">
              <div className="content1">
                <div className="feature-item">
                  <div className="feature-item-child"></div>
                  <div className="manage-portfolio-parent">
                    <div className="manage-portfolio">Cheapest TXs</div>
                    <div className="buy-and-sell">
                      Exchange popular digital currencies at the cheapest
                      possible transaction price
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="cardd-child" alt="Group 19-1" src={group19_1Icon} />
          </div>
          <div className="cardd1">
            <div className="feature-1">
              <div className="content1">
                <div className="feature-item">
                  <div className="feature-item-child"></div>
                  <div className="manage-portfolio-parent">
                    <div className="manage-portfolio">CerTIK</div>
                    <div className="buy-and-sell">
                      We are Audited by Certik. CertiK is the leading
                      security-focused ranking platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="cardd-child" alt="Group 19-2" src={group19_2Icon} />
          </div>
          <div className="cardd2">
            <div className="feature-1">
              <div className="content1">
                <div className="feature-item">
                  <div className="feature-item-child"></div>
                  <div className="manage-portfolio-parent">
                    <div className="manage-portfolio">No Contract Sells</div>
                    <div className="buy-and-sell">
                      No contract sells to fund the marketing wallets
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="cardd-child" alt="Group 19-3" src={group19_3Icon} />
          </div>
          <div className="cardd3">
            <div className="feature-1">
              <div className="content1">
                <div className="feature-item">
                  <div className="feature-item-child"></div>
                  <div className="manage-portfolio-parent">
                    <div className="manage-portfolio">Massive Community</div>
                    <div className="buy-and-sell">
                      Supported by a massive community of over 100K active
                      traders
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="cardd-child" alt="Group 19-4" src={group19_4Icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
