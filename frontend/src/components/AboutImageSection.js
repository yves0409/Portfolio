import React, { useState, useEffect } from "react";
import styled from "styled-components";
import coding from "../images/codingresize.jpeg";
import downloadCV from "../images/download.png";
import cv from "../../src/data/cv.pdf";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import ModalSubscribeComponent from "./ModalSubscribeComponent";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ImageSection = () => {
  const [aboutInfo, setAboutInfo] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const loginLink = (
    <Link to="/login">
      <IoEnterOutline size={70} />
    </Link>
  );

  const showPleaseLoginModal = () => {
    setShowSubscribe(!showSubscribe);
  };

  useEffect(() => {
    async function getResults() {
      const results = await axios.get("/api/info");
      setAboutInfo(results.data[0]);
    }
    getResults();
  }, []);

  return aboutInfo ? (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={coding} alt="res" />
        <p className="about-paragraph">{aboutInfo.bio}</p>
      </div>
      <div className="right-content">
        <div className="about-info">
          <div className="info-title">
            <p>
              Full Name :{" "}
              <span>
                {aboutInfo.first_name} {aboutInfo.last_name}
              </span>
            </p>
            <p>
              Languages : <span>{aboutInfo.languages}</span>
            </p>
            <p>
              Location : <span>{aboutInfo.location}</span>
            </p>
            <p>
              Service : <span>{aboutInfo.services}</span>
            </p>
          </div>
        </div>

        <div className="downloadResume">
          {userInfo ? (
            <Link to={cv} target="_blank" download>
              <img src={downloadCV} alt="Freepic" />
            </Link>
          ) : (
            <img
              src={downloadCV}
              alt="Freepic"
              onClick={showPleaseLoginModal}
            />
          )}
          <p className="downloadResumeText">Resume</p>
        </div>
      </div>
      {showSubscribe && (
        <ModalSubscribeComponent
          title={"Please Login to download my resume !"}
          closebtnTxt={" Close"}
          body={loginLink}
        />
      )}
    </ImageSectionStyled>
  ) : (
    <LinearProgress color="primary" />
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
    .right-content {
      .about-info {
        justify-content: center;
      }
    }
  }

  .left-content {
    width: 100%;
    margin-right: 5rem;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .about-paragraph {
      font-size: 1rem;
      margin-top: 20px;
    }
  }

  .right-content {
    width: 100%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      cursor: pointer;
      width: 70px;
      height: 70px;
      padding: 5px;
      border: 1px solid var(--icon-green-color);
      border-radius: 6px;
    }
    .downloadResumeText {
      color: var(--icon-green-color);
      margin: 0.3rem 0.2rem;
    }

    span {
      font-size: 2rem;
    }

    .about-info {
      padding-bottom: 1.4rem;
    }

    .info-title {
      padding-right: 3rem;
      p {
        font-size: 1rem;
        font-weight: 200;
      }
      span {
        font-size: 1rem;
        padding: 0.3rem 0;
        color: grey;
      }
    }
  }
`;

export default ImageSection;
