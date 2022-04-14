import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch as Switching, withRouter } from "react-router";
import "./App.css";
import Sidebar from "./components/navigation/Sidebar";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ReactGA from "react-ga";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { logout } from "../src/redux/actions/userActions";
import ToggleButton from "./components/buttons/ToggleButton";

//COMPONENT IMPORTS USING REACT LAZY
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const AboutScreen = React.lazy(() => import("./pages/AboutScreen"));
const ServiceScreen = React.lazy(() => import("./pages/ServiceScreen"));
const PortfolioScreen = React.lazy(() => import("./pages/PortfolioScreen"));
const TrendingScreen = React.lazy(() => import("./pages/TrendingScreen"));
const ContactScreen = React.lazy(() => import("./pages/ContactScreen"));
const WebDevScreen = React.lazy(() => import("./pages/WebDevScreen"));
const ArtIntScreen = React.lazy(() => import("./pages/ArtIntScreen"));
const MobDevScreen = React.lazy(() => import("./pages/MobDevScreen"));
const Loginscreen = React.lazy(() => import("./pages/Loginscreen"));
const Registerscreen = React.lazy(() => import("./pages/Registerscreen"));

//INITIALIZE GOOGLE ANALYTICS MODU;E
ReactGA.initialize("UA-208270591-1");

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [landing, setLanding] = useState(true);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //GOOGLE ANALYTICS
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  //LOGOUT
  const logoutHandler = () => {
    dispatch(logout());
  };

  //SCROLL TO TOP
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //TOGGLE LIGHT/DARK THEME
  useEffect(() => {
    document.documentElement.className = theme;
    window.addEventListener("scroll", toggleVisibility);
  }, [theme]);

  const ThemeTogglerHandler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className="App">
      {landing ? (
        <Suspense fallback={<LinearProgress color="primary" />}>
          <HomeScreen landing={landing} setLanding={setLanding} />
        </Suspense>
      ) : (
        <div>
          <Sidebar
            burgerToggle={burgerToggle}
            setBurgerToggle={setBurgerToggle}
            landing={landing}
            setLanding={setLanding}
          />
          {/* light / Dark mode */}
          <div className="theme">
            <div className="light-dark-mode">
              <ToggleButton click={ThemeTogglerHandler} />
            </div>
          </div>
          {/* TODO */}
          {userInfo ? (
            <div
              className="loggedInUser"
              onClick={logoutHandler}
              style={{ cursor: "pointer" }}
            >
              <div className="accountIcon">
                <AccountCircleOutlinedIcon />
              </div>
              <div className="accountName">{userInfo.name} </div>
            </div>
          ) : null}{" "}
          {/* hamburgerMenu */}
          <div className="hamburgerMenu">
            <IconButton onClick={() => setBurgerToggle(!burgerToggle)}>
              <MenuIcon />
            </IconButton>
          </div>
          {/* Main */}
          <MainContentStyled>
            <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
              <div className="line-4"></div>
            </div>

            <Switching>
              <Suspense fallback={<LinearProgress color="primary" />}>
                <Route path="/about" component={AboutScreen}></Route>
                <Route path="/trending" component={TrendingScreen}></Route>
                <Route path="/contact" component={ContactScreen}></Route>
                <Route path="/portfolio" component={PortfolioScreen}></Route>
                <Route path="/services" component={ServiceScreen}></Route>
                <Route path="/login" component={Loginscreen} />
                <Route path="/register" component={Registerscreen} />
                <Route path="/webdev" exact component={WebDevScreen} />
                <Route path="/artifintell" exact component={ArtIntScreen} />
                <Route path="/mobiledev" exact component={MobDevScreen} />
              </Suspense>
            </Switching>

            {isVisible && (
              <div onClick={scrollToTop} className="scrollToTopBtn">
                <PublishSharpIcon />
              </div>
            )}
          </MainContentStyled>
        </div>
      )}
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16rem;
  min-height: 100vh;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
  }

  .lines {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

  .scrollToTopBtn {
    display: flex;
    justify-content: center;
    margin: 1rem;
    cursor: pointer;
  }
`;

export default withRouter(App);
