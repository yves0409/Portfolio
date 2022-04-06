import React, { useState, useEffect, Suspense } from "react";
import { Route, Switch as Switching, withRouter } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";
import ReactGA from "react-ga";
import PublishSharpIcon from "@mui/icons-material/PublishSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { logout } from "../src/redux/actions/userActions";

//COMPONENT IMPORTS USING REACT LAZY
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const AboutScreen = React.lazy(() => import("./pages/AboutScreen"));
const ServiceScreen = React.lazy(() => import("./pages/ServiceScreen"));
const PortfolioScreen = React.lazy(() => import("./pages/PortfolioScreen"));
const TrendingScreen = React.lazy(() => import("./pages/TrendingScreen"));
const ContactScreen = React.lazy(() => import("./pages/ContactScreen"));
const WebDevelopmentScreen = React.lazy(() =>
  import("./pages/WebDevelopmentScreen")
);
const ArtificialIntelligenceScreen = React.lazy(() =>
  import("./pages/ArtificialIntelligenceScreen")
);
const MobileDevelopmentScreen = React.lazy(() =>
  import("./pages/MobileDevelopmentScreen")
);
const Loginscreen = React.lazy(() => import("./pages/Loginscreen"));
const Registerscreen = React.lazy(() => import("./pages/Registerscreen"));

ReactGA.initialize("UA-208270591-1");

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [landing, setLanding] = useState(true);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  //LOGOUT
  const logoutHandler = () => {
    dispatch(logout());
    console.log("clicked");
  };

  //Scroll To Top
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

  //Toggle light/dark theme
  useEffect(() => {
    document.documentElement.className = theme;
    window.addEventListener("scroll", toggleVisibility);
  }, [theme]);

  const ThemeTogglerHandler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div className="App">
      {landing ? (
        <Suspense
          fallback={
            <div>
              <LinearProgress color="primary" />
            </div>
          }
        >
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
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ "aria-label": "" }}
                  onChange={ThemeTogglerHandler}
                  color="default"
                  size="small"
                />
              </div>
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
              <Suspense
                fallback={
                  <div>
                    <LinearProgress color="primary" />
                  </div>
                }
              >
                <Route path="/about" component={AboutScreen}></Route>
                <Route path="/trending" component={TrendingScreen}></Route>
                <Route path="/contact" component={ContactScreen}></Route>
                <Route path="/portfolio" component={PortfolioScreen}></Route>
                <Route path="/services" component={ServiceScreen}></Route>
                <Route path="/login" component={Loginscreen} />
                <Route path="/register" component={Registerscreen} />
                <Route
                  path="/webdevelopment"
                  exact
                  component={WebDevelopmentScreen}
                />
                <Route
                  path="/artificialintelligence"
                  exact
                  component={ArtificialIntelligenceScreen}
                />
                <Route
                  path="/mobiledevelopment"
                  exact
                  component={MobileDevelopmentScreen}
                />
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
