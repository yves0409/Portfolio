import React,{useState,useEffect} from 'react'
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
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//  import axios from "axios"





const Navigation = ({hideSidebarOnItemClick}) => {
    const dispatch = useDispatch();
    // const [likeAdd,setLikeAdd] = useState("299")
    
    
    //GETTING THE STATE (CHANGE LOGIN/LOGOUT0 BUTTON ACCORDINGLY)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const pageLikeReducer = useSelector((state) => state.pageLikeReducer);
    const { likes,success } = pageLikeReducer;

    useEffect(() => {
        dispatch(likeAction()) 
      }, []);
   
    const logoutHandler = () => {
        dispatch(logout());
      };

    //  const addLikeHandler = () => {
         
    //    axios.put("/api/like/add")
    //    .then(res => console.log(res))
    //    .then(axios.get("/api/like")
    //    .then(result => {
    //        const currentLikes = result.data[0].likes
    //        setLikeAdd(currentLikes)
    //    }))
       
    //   };
     
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
              
               
               {/* <ThumbUpAltIcon onClick={() => { addLikeHandler()}} style={{cursor:"pointer"}}/>
               {likeAdd} people liked this page */}
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
    //box-shadow: 6px 0px 20px 6px #8b9bf533;
    color: magenta;
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
    color:white;
 
  }
 a:hover::before{
    content : "";
  position: absolute;
  left    : 30%;
  bottom  : 0;
  height  : 1px;
  width   : 40%;  /* or 100px */
  border-bottom:1px solid magenta;
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
