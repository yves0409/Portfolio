import React,{useState,useEffect} from "react"
import {Route,Switch as Switching} from "react-router"
import Sidebar from "./components/Sidebar"
import styled from "styled-components"
import HomeScreen from "./pages/HomeScreen"
import AboutScreen from "./pages/AboutScreen"
import ServiceScreen from "./pages/ServiceScreen"
import PortfolioScreen from "./pages/PortfolioScreen"
import TrendingScreen from "./pages/TrendingScreen"
import ContactScreen from "./pages/ContactScreen"
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import arrow from "./images/arrowUp.png"



function App() {
  const [theme,setTheme]=useState('dark-theme')
  const [checked,setChecked]=useState(false)
  const [burgerToggle,setBurgerToggle]=useState(false)
  const [isVisible, setIsVisible] = useState(false);
 

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
      behavior: "smooth"
    });
  };


useEffect(() => {
   document.documentElement.className= theme
   window.addEventListener("scroll", toggleVisibility);
  }, [theme])

const ThemeTogglerHandler = ()=>{
      if(theme === "light-theme"){
         setTheme("dark-theme")
         setChecked(false)
      }else{
        setTheme("light-theme")
       setChecked(true)  
      }
      }
  
return (
<div className="App">
    <Sidebar burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle}/>

    {/* light / Dark mode     */}
    <div className="theme">
              <div className="light-dark-mode">
                <div className="left-content">
                    <Brightness4Icon/>
                </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{'aria-label':''}} 
                  onChange={ThemeTogglerHandler}
                  />
                </div>
              </div>
    </div>

    <div className="hamburgerMenu">
          <IconButton onClick={()=> setBurgerToggle(!burgerToggle)}>
            <MenuIcon />
          </IconButton>
    </div>
    

    <MainContentStyled>
      
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/about" exact component={AboutScreen}></Route>
          <Route path="/trending" exact component={TrendingScreen}></Route>
          <Route path="/contact" exact component={ContactScreen}></Route>
          <Route path="/portfolio" exact component={PortfolioScreen}></Route>
          <Route path="/services" exact component={ServiceScreen}></Route>
         </Switching>

        {isVisible && 
        <div onClick={scrollToTop} className="scrollToTopBtn">
          <img src={arrow} alt="arrowup by icons8"/>
        </div>}
        
    </MainContentStyled>
</div>
  );
}


const MainContentStyled = styled.main`
    position:relative;
    margin-left:16rem;
    min-height:100vh;
  @media screen and (max-width:1000px){
      margin-left:0px;
 };
  .lines{
    position:absolute;
    width:100%;
    min-height:100%;
    display: flex;
    justify-content:space-evenly;
    opacity:0.4;
    z-index: -1;
  .line-1,.line-2,.line-3,.line-4{
    width:1px;
    min-height:100vh;
    background-color: var(--border-color);
  }
}
.scrollToTopBtn img{
    float:right;
    margin:1rem; 

  }
`

export default App;


