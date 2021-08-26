import React from 'react'
import styled from "styled-components"
import img from "../images/HomeScreenImageresize.jpeg"
import 'react-toastify/dist/ReactToastify.min.css'



const HomeScreen = () => {
  
return (
    <HomePageStyled>
        <div className="backgroundImage">
           <img src={img} alt="Landingpage desert" />
        </div>
       
        <div className="HomeScreenTypography">
           <h1>{'<'}Front-End Web Development{'/>'}</h1>
           <p>Every Pixel Matters</p>
        </div>
    </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
  width:100%;
  height:100vh;
  position: relative;

 .backgroundImage{
  img{
  width:100vw;
  height:100vh;
  object-fit:cover;
  opacity:0.5;
      }
    }
 .HomeScreenTypography{
  h1{
  font-family: 'Source Serif Pro', serif;
      }
  p{
  font-size:1.2rem;
  @media screen and (max-width: 700px){
         font-size: .8rem;
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
