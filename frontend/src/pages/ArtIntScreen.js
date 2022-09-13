import React from "react";
import Title from "../components/titles/Title";
import styled from "styled-components";
import aiImg from "../images/ai.svg";
import { MainLayout } from "../styles/Layout";

const ArtIntScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title
          title={"Artificial Intelligence"}
          span={"Artificial Intelligence"}
        />
        <img
          src={aiImg}
          height="auto"
          width="50%"
          alt="artificial intelligence"
        />
        <br />
        <h1 style={{ marginTop: "6rem" }}>Coming soon ...</h1>
      </div>
      {/* <WbDevStyled>
        <div className="banner">
          <div className="banner-text">
            <div className="text-wrapper">
              <div className="box b1">
                <h4>Boost your business</h4>
                <span>
                  Every modern business should have their own website to use as
                  a billboard to increase their stream of existing and new
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
                <h4>Custom Designed</h4>
                <span>
                  By listening to the client we make sure that you have your
                  website just like you want it by making it visually attractive
                  to your visitors which will result in an increase of revenue.
                </span>
              </div>
            </div>
          </div>
        </div>
      </WbDevStyled> */}
    </MainLayout>
  );
};

// const WbDevStyled = styled.header`
//   .banner-text {
//     position: absolute;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 100%;
//   }
//   .banner-text h2 {
//     text-align: center;
//     font-size: 60px;
//     margin: 0;
//     color: darkturquoise;
//     text-transform: uppercase;
//   }
//   .text-wrapper {
//     text-align: center;
//   }

//   .box {
//     opacity: 0;
//     position: absolute;
//     left: 25%;

//     margin: 0 auto;
//     width: 50%;

//     h4 {
//       font-size: 35px;
//       color: #ffffff;
//       font-weight: bold;
//       margin-top: 30px;
//       font-family: century "Franklin Gothic Medium", "Arial Narrow", Arial,
//         sans-serif;
//     }
//     span {
//       color: darkturquoise;
//       font-size: 20px;
//     }
//   }

//   .b1 {
//     animation: ani1 25s infinite;
//   }
//   .b2 {
//     animation: ani2 25s infinite;
//   }
//   .b3 {
//     animation: ani3 25s infinite;
//   }

//   @keyframes ani1 {
//     0% {
//       opacity: 0;
//     }
//     10% {
//       opacity: 1;
//     }
//     20% {
//       opacity: 0;
//     }
//   }
//   @keyframes ani2 {
//     20% {
//       opacity: 0;
//     }
//     40% {
//       opacity: 1;
//     }
//     60% {
//       opacity: 0;
//     }
//   }
//   @keyframes ani3 {
//     60% {
//       opacity: 0;
//     }
//     80% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
// `;

export default ArtIntScreen;
