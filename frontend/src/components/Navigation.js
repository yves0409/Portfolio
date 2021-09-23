import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../images/avatarResize.jpg";
import instagram from "../images/instagramResize.png";
import linkedin from "../images/linkedinResize.png";
import github from "../images/Github-icon.png";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
//mport { Provider, LikeButton } from "@lyket/react";
//import swal from "sweetalert";
import CustomButton from "../components/CustomButton";
import ModalComponent from "../components/ModalComponent";

const Navigation = ({ hideSidebarOnItemClick }) => {
  const dispatch = useDispatch();
  const [showSubscribe, setShowSubscribe] = useState(false);

  //GETTING THE STATE (CHANGE LOGIN/LOGOUT0 BUTTON ACCORDINGLY)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  // const openModal = () => {
  //   swal({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Thank you for liking my page",
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });
  // };

  const openSub = () => {
    setShowSubscribe(!showSubscribe);
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
          <NavLink to="/" activeClassName="active-class" exact>
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
      {/* Likebutton */}
      {/* <Provider apiKey="pt_3a41bc2c69f68f5b385538067e7910" theme={{colors: {text: "var(--white-color)",icon:"var(--white-color-2)"}}}>
                    <LikeButton
                        namespace="my-like-button"
                        id="likebtnId"
                        onPress={openModal}
                        />
             </Provider> */}
      {/* Subscributton */}
      <CustomButton open={openSub} />
      {showSubscribe ? <ModalComponent /> : null}
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
  @media screen and (max-width: 896px) and (orientation: landscape) {
    height: 100vh;
    .avatar {
      display: none;
    }
    .nav-items {
      margin: 0.5rem;
    }
    .social {
      display: none;
    }
    .closeBtn {
      display: none;
    }
  }

  .avatar {
    margin-top: 2rem;
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 0.5rem 0;
    h2 {
      font-size: 1rem;
      font-family: "Source Serif Pro", serif;
      margin-top: 10px;
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
    margin-bottom: 2rem;
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
        width: 35%; /* or 100px */
        border-bottom: 3px solid var(--icon-green-color);
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 80%;
    margin-top: 2rem;
    p {
      padding: 2rem 0;
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
  }
  .likes {
    font-size: 12px;
  }
`;
export default Navigation;
