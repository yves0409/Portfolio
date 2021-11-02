import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../images/avatarResize.jpg";
import instagram from "../images/instagramResize.png";
import linkedin from "../images/linkedinResize.png";
import github from "../images/Github-icon.png";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomButton from "../components/CustomButton";
import ModalSubscribeComponent from "../components/ModalSubscribeComponent";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Navigation = ({ hideSidebarOnItemClick, landing, setLanding }) => {
  const dispatch = useDispatch();
  const [showSubscribe, setShowSubscribe] = useState(false);

  //GETTING THE STATE (CHANGE LOGIN/LOGOUT0 BUTTON ACCORDINGLY)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //MAILCHIMP COMPONENT TO PASS AS A PROP
  const mailchimp = (
    <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
  );

  const logoutHandler = () => {
    dispatch(logout());
  };

  const openSub = () => {
    setShowSubscribe(!showSubscribe);
  };

  const goHome = () => {
    setLanding(!landing);
  };

  return (
    <NavigationStyled>
      {/* CloseNavButton */}
      <div className="closeBtn" onClick={() => hideSidebarOnItemClick()}>
        <HighlightOffSharpIcon />
      </div>
      {/* Avatar */}
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h2 className="avatarTxt">Yves Loeys</h2>
      </div>
      {/* Socialmedia */}
      <div className="social">
        <a
          href="https://www.github.com/yves0409"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="githubicon" className="githubIcon" />
        </a>
        <a
          href="https://www.instagram.com/yves0409"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagramicon" />
        </a>
        <a
          href="https://www.linkedin.com/in/yves-loeys-461b66171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedinicon" />
        </a>
      </div>
      {/* Navlinks */}
      <ul className="nav-items" onClick={() => hideSidebarOnItemClick()}>
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact onClick={goHome}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" activeClassName="active-class" exact>
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>
            PortFolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/trending" activeClassName="active-class" exact>
            Trending
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>

        {userInfo ? (
          <li className="nav-item" onClick={logoutHandler}>
            <NavLink to="/logout" activeClassName="active-class" exact>
              Logout
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active-class" exact>
              Login
            </NavLink>
          </li>
        )}
      </ul>

      <CustomButton open={openSub} title={"Subscribe"} />
      {showSubscribe ? (
        <ModalSubscribeComponent
          title={"Enter a valid email to subribe"}
          body={"If you subsribe you will receive updates and newsletters"}
          closebtnTxt={" Close"}
          body2={mailchimp}
        />
      ) : null}
      {/* Footer */}
      <footer className="footer">
        <p>@2021 Yves Loeys</p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .css-16fl4ks-Simple:focus {
    outline: none;
  }
  .css-iyjp1g-Simple {
    outline: none;
  }
  .closeBtn {
    margin-top: 1rem;
  }

  .avatar {
    margin: 2rem 0 2rem 0;
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 0.5rem 0;
    h2 {
      font-size: 1rem;
      font-family: "Source Serif Pro", serif;
      margin: 1rem 0 1rem 0;
      color: var(--white-color);
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .social {
    margin-top: 1rem;
    img {
      height: 60px;
      width: 60px;
      margin-bottom: 2rem;
    }
    .githubIcon {
      height: 37px;
      width: 37px;
      color: white;
      border: 1px solid var(--white-color);
      border-radius: 9px;
      margin-right: 1rem;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem 0 2rem 0;

    .active-class {
      color: var(--icon-green-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--font-dark-color-3);
      }
      a:hover {
        color: var(--icon-green-color);
        text-decoration: none;
      }
      a:hover::before {
        content: "";
        position: absolute;
        left: 32%;
        bottom: 0px;
        height: 0px;
        width: 35%;
        border-bottom: 3px solid var(--icon-green-color);
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 80%;
    margin-top: 3rem;
    p {
      padding: 3rem 0;
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
  }
  .likes {
    font-size: 12px;
  }
  @media screen and (max-width: 896px) {
    .avatar {
      margin: 1rem 0 1rem 0;
    }
    .nav-items {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .footer {
      margin-top: 1rem;
      p {
        padding: 1rem 0;
      }
    }
    .nav-items {
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 896px) and (orientation: landscape) {
    .avatar {
      display: none;
    }
    .nav-items {
      margin-top: 2rem;
    }
    .social {
      display: none;
    }
    .closeBtn {
      display: none;
    }
  }
`;
export default Navigation;
