import React from "react";
import styled from "styled-components";
import landingPage from "../images/landingpage.jpeg";
import "react-toastify/dist/ReactToastify.min.css";
import CustomButton from "../components/buttons/CustomButton";
import { useHistory } from "react-router-dom";
import Audio from "../components/Audio";

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
        <h1>
          {"<"}Front-End Web Development{"/>"}
        </h1>
        <div className="text-typing">
          <Audio />
          <p>Every Pixel Matters</p>
        </div>
        <div className="enterBtn">
          <CustomButton open={enterSite} title={"Enter"} />
        </div>
      </div>
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
    opacity: 0.5;
  }

  .HomeScreenTypography {
    font-family: "Source Serif Pro", serif;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    letter-spacing: 1px;
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
      @media screen and (max-width: 700px) {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 896px) and (orientation: landscape) {
      h1 {
        font-size: 16px;
        margin-top: 3rem;
      }
    }
    .text-typing {
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
    }

    p {
      font-size: 1.2rem;
      @media screen and (max-width: 700px) {
        font-size: 0.7rem;
      }
    }
    position: absolute;
    top: 20%;
    /* left: 50%; */
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }
  /* #cf3 > div {
    position: absolute;
    left: 0;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  } */
  .enterBtn {
    position: absolute;
    top: 105%;

    opacity: 0.7;
  }
  /* @keyframes cf3FadeInOut {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  } */

  .HomeScreenTypography {
    h1 {
      font-family: "Source Serif Pro", serif;
    }
    p {
      font-size: 1.2rem;
      @media screen and (max-width: 700px) {
        font-size: 0.8rem;
      }
    }
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
  }
`;
export default HomeScreen;
