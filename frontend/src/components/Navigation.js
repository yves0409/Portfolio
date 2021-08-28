import React,{useState} from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import avatar from "../images/avatarResize.jpg"
import facebook from "../images/facebookResize.png"
import instagram from "../images/instagramResize.png"
import linkedin from "../images/linkedinResize.png"
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//import axios from "axios"




const Navigation = ({hideSidebarOnItemClick}) => {
    const dispatch = useDispatch();
     // const [likes,setLikes] = useState(0)
    
    //GETTING THE STATE (CHANGE LOGIN/LOGOUT0 BUTTON ACCORDINGLY)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
      };

    //  axios.get("/api/like").then(response =>  console.log(response.data[0]._id)
    // )
     // const id = "612908bb374b68c9b5cbbd99"   
     
      
      //const addLikeHandler = (id) => {
        // setLikes(likes +1)
        // const newLikeCount = prompt("enter new age")
        // axios.put("http://localhost:5000/update",{newLikeCount:newLikeCount,id:id})
       
      //};
     
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
                   <li className="nav-item">
                       <NavLink to="/register" activeClassName="active-class" exact >Register</NavLink>
                   </li>
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
              
               
               {/* <ThumbUpAltIcon onClick={() => { addLikeHandler(id)}} style={{cursor:"pointer"}}/> */}
               {/* {likes} people liked this page */}
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

@media screen and (max-width:900px) and (orientation:landscape){
 .avatar{
    display: none;
}
};

@media screen and (min-width:850px) {
 .closeBtn{
    display:none;
    }
   };
 
.closeBtn{
    margin:1rem;
 }

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
  }
 a:hover::before{
   width:100%;
   height:100%;
    }
   }
 }
 footer{
    border-top: 1px solid var(--border-color);
    width:80%;
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
