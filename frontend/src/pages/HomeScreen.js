import React from 'react'
import styled from "styled-components"
import Particle from '../components/Particle'
import img from "../images/HomeScreenImage.JPG"


const HomeScreen = () => {
    return (
    <HomePageStyled>
        <div id="cf3">
            <div className="particles-con">
                <Particle/>
            </div>
            <div className="backgroundImage">
                <img src={img} alt="" />
            </div>
         </div>
          
        <div className="HomeScreenTypography">
            <h1>{'<'}Front-End Web Development{'/>'}</h1>
            <p>Where Every Pixel Matters</p>
        </div>
    </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
  width:100%;
  height:100vh;
  position: relative;
  #cf3 {
  position:relative;
  height:100vh;
  width:100%;
  margin:0 auto;
}

#cf3 > div {
  position:absolute;
  left:0;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
  @keyframes cf3FadeInOut {
  0% {
  opacity:1;
}
45% {
  opacity:1;
}
55% {
  opacity:0;
}
100% {
  opacity:0;
}
}
#cf3 div.particles-con{
  animation-name: cf3FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-direction: alternate;
}
.particles-con{
  width:100%;
}
.backgroundImage{
  img{
  width:100%;
  height:100%;
  object-fit:contain;
  opacity:0.5;
      }
      
  }
.HomeScreenTypography{
  h1{
  font-family: 'Source Serif Pro', serif;
      }
  p{
  font-size:1.2rem;
      }
  position:absolute;
  top:20%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
  width:80%;
      }
`
export default HomeScreen
