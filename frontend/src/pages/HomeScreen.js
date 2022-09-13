import React from "react";
import styled from "styled-components";
import { device } from "../styles/Devices";
import landingPage from "../images/landingpage.jpeg";
import "react-toastify/dist/ReactToastify.min.css";
import CustomButton from "../components/buttons/CustomButton";
import { useHistory } from "react-router-dom";
import Audio from "../components/Audio";
import logo from "../images/birdlogo2.png";

const HomeScreen = ({ landing, setLanding }) => {
  let history = useHistory();

  //ENTER
  const enterSite = () => {
    setLanding(!landing);
    history.push("/about");
  };

  return (
    <HomePageStyled>
      <div className="backgroundImage">
        <img src={landingPage} alt="Landingpage desert" />
      </div>
      <div className="HomeScreenTypography">
        <img className="bird-logo" src={logo} alt="birdlogo" />
        <h1>
          {"<"}Web Development{"/>"}
        </h1>{" "}
        {/* <div className="text-typing">
          <Audio />
          <p>Every Pixel Matters</p>
        </div> */}
        <div className="enterBtn">
          <CustomButton open={enterSite} title={"Enter"} />
        </div>
      </div>
      <WbDevStyled>
        <div className="banner">
          <div className="banner-text">
            <div className="text-wrapper">
              <div className="box b1">
                <h4>Boost your business</h4>
                <span>
                  Every modern business should have their own website to use as
                  a billboard and increase their stream of existing and new
                  customers
                </span>
              </div>

              <div className="box b2">
                <h4>Modern Technologies</h4>
                <span>
                  By using the latest and most innovating technologies you can
                  be sure that your website is up and running at fast pace
                  speeds and will be noticed by using search engine optimisation
                </span>
              </div>
              <div className="box b3">
                <h4>You're in charge</h4>
                <span>
                  By listening to the client we make sure that you have your
                  website just like you want it by making it visually attractive
                  to your visitors which will result in an increase of revenue.
                </span>
              </div>
            </div>
          </div>
        </div>
      </WbDevStyled>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .backgroundImage {
    animation: fadeIn 6s;
    -webkit-animation: fadeIn 6s;
    -moz-animation: fadeIn 6s;
    -o-animation: fadeIn 6s;
    -ms-animation: fadeIn 6s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0.7;
  }

  .HomeScreenTypography {
    position: absolute;
    top: 20%;
    left: 50%;
    font-family: "Source Serif Pro", serif;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    letter-spacing: 1px;

    .bird-logo {
      height: 100px;
      width: 100px;
    }
    h1 {
      background-image: url(https://res.cloudinary.com/yves/image/upload/v1636734097/Portfolio/phemin9zvaxqh66nbtnf.gif);
      background-size: cover;
      color: transparent;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      text-transform: uppercase;
      font-size: 35px;
      line-height: 1;
      padding: 10px;
      margin: 10px 0;
      /* @media screen and (max-width: 700px) {
        font-size: 16px;
      } */
      @media ${device.mobileL} {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 896px) and (orientation: landscape) {
      h1 {
        font-size: 16px;
        margin-top: 3rem;
      }
    }
    /* .text-typing {
      padding: 20px 30px;
      font-size: 35px;
      font-family: monospace;
      border-radius: 50px;
    }
    .text-typing p {
      margin: 0px;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 4s steps(22, end) forwards, blink 1s infinite;
    }
    @keyframes typing {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    } */

    /* p {
      font-size: 1.2rem;
      @media screen and (max-width: 700px) {
        font-size: 0.7rem;
      }
    } */
    position: absolute;
    top: 20%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }

  .enterBtn {
    position: absolute;
    top: 105%;
    opacity: 0.7;
    @media ${device.mobileL} {
      top: 120%;
    }
  }
`;

const WbDevStyled = styled.header`
  .banner-text {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .banner-text h2 {
    text-align: center;
    font-size: 40px;
    margin: 0;
    color: darkturquoise;
    text-transform: uppercase;
    @media screen and (max-width: 700px) {
      font-size: 10px;
      color: orange;
    }
  }

  .text-wrapper {
    text-align: center;
  }

  .box {
    opacity: 0;
    position: absolute;
    left: 25%;

    margin: 0 auto;
    width: 50%;

    h4 {
      font-size: 25px;
      color: #ffffff;
      font-weight: bold;
      margin-top: 30px;
      font-family: century "Franklin Gothic Medium", "Arial Narrow", Arial,
        sans-serif;
      @media ${device.mobileL} {
        font-size: 16px;
        margin-top: 0px;
      }
    }
    span {
      color: darkturquoise;
      font-size: 20px;
      @media ${device.mobileL} {
        font-size: 16px;
      }
    }
  }

  .b1 {
    animation: ani1 25s infinite;
  }
  .b2 {
    animation: ani2 25s infinite;
  }
  .b3 {
    animation: ani3 25s infinite;
  }

  @keyframes ani1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
  }
  @keyframes ani2 {
    20% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
  }
  @keyframes ani3 {
    60% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export default HomeScreen;
