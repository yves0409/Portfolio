import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import avatar from "../images/avatar.jpg"
// import FacebookIcon from "@material-ui/icons/Facebook"
// import GithubIcon from "@material-ui/icons/GitHub"
// import InstagramIcon from "@material-ui/icons/Instagram"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import github from "../images/Github-icon.png"

const Navigation = ({hideSidebarOnItemClick}) => {

   
    return (
          <NavigationStyled >
           <div className="avatar">
               <img src={avatar} alt="avatar" />
               <h2>Yves Loeys</h2>
               
               {/* <div className="icons">
               
                    <a href="https://www.facebook.com" className="icon i-facebook"><FacebookIcon/></a>
                    <a href="https://www.github.com" className="icon i-github"><GithubIcon/></a>
                    <a href="https://www.instagram.com"  className="icon i-instagram"><InstagramIcon/></a>
                </div> */}
               
               </div> 
               <div className="social">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebookicon"/></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagramicon"  /></a> 
               {/* <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="githubicon"/></a> */}
               <a href="https://www.linkedin.com/in/yves-loeys-461b66171" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedinicon"/></a>
                </div>
               <ul className="nav-items" onClick={()=> hideSidebarOnItemClick()}>
                   <li className="nav-item">
                       <NavLink to="/" activeClassName="active-class" exact >Home</NavLink>
                   </li>
                   <li className="nav-item" >
                       <NavLink to="/about" activeClassName="active-class" exact >About</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/services" activeClassName="active-class" exact >Services</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/portfolio" activeClassName="active-class" exact >PortFolio</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/trending" activeClassName="active-class" exact >Trending</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/contact" activeClassName="active-class" exact >Contact</NavLink>
                   </li>

                  
               </ul>
               <footer className="footer">
                   <p>@2021 Yves Loeys</p>
               </footer>
               
        </NavigationStyled>
       
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    flex-direction:column;
    align-items: center;
    height:100%;
    width:100%;
    border-right:1px solid var(--border-color);

 .avatar {
     margin-top:2rem;
     width:80%;
     border-bottom: 1px solid var(--border-color);
     text-align:center;
     padding: .5rem 0;
     h2{
         font-size:1.5rem;
        font-family: 'Source Serif Pro', serif; 
        color:var(--white-color); 
     }
    img{
         width:80%;
         height:60%;
         object-fit:cover;
         border-radius:50%;
         border:8px solid var(--border-color);
         
     }
 }
.social{
    margin-top:1rem;
    
         
     img{
        height:60px; 
        width:60px;
        margin-bottom:2rem
       
    }
}

 /* .icons{
          display: flex;
          justify-content:center;
          margin-top:1rem;
           border-bottom: 1px solid var(--border-color); 
          .icon{
              border:2px solid var(--border-color); 
              display: flex;
              align-items: center;
              justify-content:center;
              border-radius:50%;
              transition:all .4s ease-in-out;
              cursor:pointer;
              &:hover{
                border:2px solid var(--primary-color); 
                
              }
              &:not(:last-child){
                  margin-right:1rem;
                  
              }
              svg{
                  margin:.5rem
              }
          }
          .i-facebook{
            &:hover{
                border:2px solid #4267B2; 
                color:#4267B2;
                background-color:var(--white-color)
              }
          }
          .i-github{
            &:hover{
                border:2px solid #24292e; 
                color:#24292e;
                background-color:var(--white-color)
              }
          }
          .i-instagram{
            &:hover{
                border:2px solid #C13584; 
                color:#C13584;
                background-color:var(--white-color)
              }
          }
      } */

 .nav-items{
     width:100%;
     text-align:center;
     margin-bottom:9rem;
     .active-class{
        box-shadow: 6px 0px 20px 6px #8b9bf533
     }
     li{
         display: block;
         a{
             display: block;
             padding:.2rem 0;
             position:relative;
             z-index:10;
             text-transform: uppercase;
             transition:all .4s ease-in-out;
             font-weight:500;
             letter-spacing:1px;
             
             
            
             &:hover{
                 cursor:pointer;
                 box-shadow: 6px 0px 20px 6px #40eb0c33;
                 

             }
             /* &::before{
                 content:"";
                 position:absolute;
                 bottom:0;
                 left:0;
                 width:0;
                 height:50%;
                 background-color:var(--primary-color);
                 transition: All 0.4s cubic-bezier(1, 0.2, 0.25, .95)  ;
                 z-index:3;
                 opacity:0.21;
             } */
         }
         a:hover::before{
width:100%;
height:100%;
         }
     }
 }

 footer{
     border-top: 1px solid var(--border-color);
     width:100%;
     
  

     p{
         padding:2rem 0;
         font-size:0.7rem;
         display: block;
         text-align: center;
     }
 }

`
export default Navigation
