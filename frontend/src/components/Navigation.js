import React,{useEffect} from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import avatar from "../images/avatarResize.jpg"
import facebook from "../images/facebookResize.png"
import instagram from "../images/instagramResize.png"
import linkedin from "../images/linkedinResize.png"
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { likeAction } from "../redux/actions/likeActions";
import { Provider, LikeButton } from "@lyket/react";
import swal from 'sweetalert';


const Navigation = ({hideSidebarOnItemClick}) => {
    const dispatch = useDispatch();
   
  
    //GETTING THE STATE (CHANGE LOGIN/LOGOUT0 BUTTON ACCORDINGLY)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

useEffect(() => {
        dispatch(likeAction()) 
      }, []);
   

const logoutHandler = () => {
        dispatch(logout());
      };

const openModal = () => {
  
    swal({
        position: 'top-end',
        icon: 'success',
        title: 'Thank you for liking my page',
        showConfirmButton: false,
        timer: 2000
      })
}



  
return (
    <NavigationStyled >
          <div className="closeBtn" onClick={()=> hideSidebarOnItemClick()}>
            <HighlightOffSharpIcon/>
           </div>
           <div className="avatar">
               <img src={avatar} alt="avatar" />
               <h2 className="avatarTxt">Yves Loeys</h2>
           </div> 
          
               <div className="social">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebookicon"/></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagramicon"  /></a> 
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
                   {/* <li className="nav-item">
                       <NavLink to="/register" activeClassName="active-class" exact >Register</NavLink>
                   </li> */}
                    {userInfo ? ( 
                     <li className="nav-item" onClick={logoutHandler}>
                       <NavLink to="/logout" activeClassName="active-class" exact >Logout</NavLink>
                   </li> 
                    ):(
                    <li className="nav-item">
                       <NavLink to="/login" activeClassName="active-class" exact >Login</NavLink>
                   </li>
                    )} 
                </ul>
             <Provider apiKey="pt_3a41bc2c69f68f5b385538067e7910" theme={{colors: {text: "var(--white-color)",icon:"var(--white-color-2)"}}}>
                    <LikeButton
                      
                        namespace="my-blog-post"
                        id="how-to-beat-me-at-chess"
                        onPress={openModal}
                        hideCounterIfLessThan={1}
                        />
         
           </Provider>
                
               
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
    .css-16fl4ks-Simple:focus{
       outline:none;
       }
    .css-iyjp1g-Simple{
        outline:none;
    }
   
@media screen and (max-width:896px) and (orientation:landscape){
  height:100vh;
 .avatar{
    display: none;
   }
 .nav-items{
    margin:.5rem;
    }
  .social{
    display: none;

  }
  .closeBtn{
    display:none;
  }
};

/* @media screen and (max-height:812px) {
  height:100vh;
 
 .nav-items{
    margin:.5rem;
    }
 
};

@media screen and (min-width:850px) {
 .closeBtn{
    display:none;
  }
};
 .closeBtn{
    margin:1rem;
 } */

 .avatar {
     margin-top:2rem;
     width:80%;
     border-bottom: 1px solid var(--border-color);
     text-align:center;
     padding: .5rem 0;
 h2{
     font-size:1rem;
     font-family: 'Source Serif Pro', serif;
     margin-top:10px; 
     color:var(--white-color); 
     }
 img{
    width:150px;
    height:150px;
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
.nav-items{
     width:100%;
     text-align:center;
     margin-bottom:3rem;
.active-class{
   color: var(--icon-green-color);
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
    color:var(--font-dark-color-3);
 
  }
  a:hover{
    color:var(--icon-green-color);
    text-decoration:none;
  }
 a:hover::before{
    content : "";
  position: absolute;
  left    : 32%;
  bottom  : 0px;
  height  : 0px;
  width   : 35%;  /* or 100px */
  border-bottom: 3px solid var(--icon-green-color);
    }
   }
 }
 footer{
    border-top: 1px solid var(--border-color);
    width:80%;
    margin-top:3rem;
 p{
    padding:2rem 0;
    font-size:0.7rem;
    display: block;
    text-align: center;
    
  }
 
 }
 .likes{
     font-size:12px;
 }

`
export default Navigation
