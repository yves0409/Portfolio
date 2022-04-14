import React, { useState, useEffect } from "react";
import styled from "styled-components";
import resume from "../images/download.png";
import cv from "../../src/data/cv.pdf";
import LinearProgress from "@material-ui/core/LinearProgress";
import ModalSubscribeComponent from "./modals/ModalSubscribeComponent";
import { getInfo } from "../redux/actions/infoActions";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

const ImageSection = () => {
  const [showSubscribe, setShowSubscribe] = useState(false);

  const dispatch = useDispatch();

  //STATE ACCESS
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const infoList = useSelector((state) => state.infoList);
  const { loading, infos, success, error } = infoList;

  const loginLink = (
    <Link to="/login">
      <IoEnterOutline size={70} />
    </Link>
  );

  //MODAL TO ASK FOR LOGIN
  const showLoginModal = () => {
    setShowSubscribe(!showSubscribe);
  };

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  return (
    <ImageSectionStyled>
      {success ? (
        infos.map((info) => (
          <div className="content" key={info._id}>
            <div className="left-content">
              <img src={info.image} alt="work setup" />

              <p className="about-paragraph">{info.bio}</p>
            </div>{" "}
            <div className="right-content">
              <div className="about-info">
                <div className="info-title">
                  <p>
                    Name :{" "}
                    <span>
                      {info.first_name} {info.last_name}
                    </span>
                  </p>
                  <p>
                    Languages : <span>{info.languages}</span>
                  </p>
                  <p>
                    Location : <span>{info.location}</span>
                  </p>
                  <p>
                    Service : <span>{info.contract}</span>
                  </p>
                </div>
              </div>

              <div className="downloadResume">
                {userInfo ? (
                  <Link to={cv} target="_blank" download>
                    <img src={resume} alt="Freepic" />
                  </Link>
                ) : (
                  <img src={resume} alt="Freepic" onClick={showLoginModal} />
                )}
                <p className="downloadResumeText">Resume</p>
              </div>
            </div>
          </div>
        ))
      ) : loading ? (
        <LinearProgress />
      ) : (
        <div className="errorstatus">
          {" "}
          <h1>Could not get information : {error}</h1>
          <p>Please try again later</p>
        </div>
      )}

      {showSubscribe && (
        <ModalSubscribeComponent
          title={"Please Login to download my resume !"}
          closebtnTxt={" Close"}
          body={loginLink}
        />
      )}
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  .content {
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 1400px) {
    .content {
      flex-direction: column;
    }

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
