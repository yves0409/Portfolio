import React from 'react'
import styled from "styled-components"
import img from "../images/HomeScreenImageresize.jpeg"
import 'react-toastify/dist/ReactToastify.min.css'
// import typewriter from "../images/typewriter.wav"





const HomeScreen = () => {
  
return (
    <HomePageStyled>
        <div className="backgroundImage">
           <img src={img} alt="Landingpage desert" />
        </div>
       
        <div className="HomeScreenTypography" >
           <h1>{'<'}Front-End Web Development{'/>'}</h1>
           <div className="text-typing">
           {/* <audio><source src={typewriter} type="audio/mpeg" /></audio> */}
           <p>Every Pixel Matters</p>
           </div>
          
        </div>
    </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
  width:100%;
  height:100vh;
  position: relative;

 .backgroundImage{
  animation: fadeIn 6s;
  -webkit-animation: fadeIn 6s;
  -moz-animation: fadeIn 6s;
  -o-animation: fadeIn 6s;
  -ms-animation: fadeIn 6s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
  img{
  width:100vw;
  height:100vh;
  object-fit:cover;
  opacity:0.5;
      }
    
 .HomeScreenTypography{
  font-family: 'Source Serif Pro',serif;
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  letter-spacing: 1px;
  h1{
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 35px;
  line-height: 1;
  padding:10px;
  margin: 10px 0;
  @media screen and (max-width: 700px){
        font-size: 16px;
         }
      }
  .text-typing {
  padding:20px 30px;
  background:transparant;
  font-size:35px;
  font-family:monospace;
  border-radius:50px;
}
.text-typing p {
  margin:0px;
  white-space:nowrap;
  overflow:hidden;
  animation:typing 4s steps(22,end) forwards,
            blink 1s infinite;
}
@keyframes typing {
  0% { width:0% }
  100% { width:100% }
}
/* @keyframes blink {
  0%,100% {
    border-right:2px solid transparent;
  }
  50% {
    border-right:2px solid transparent;
  }
} */
  p{
  font-size:1.2rem;
  @media screen and (max-width: 700px){
         font-size: .7rem;
        }
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
