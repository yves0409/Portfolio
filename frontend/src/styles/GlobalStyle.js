import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

//COLOR SCHEMES
.light-theme{
    --primary-color:#007bff;
    --primary-color-light:#057bff;
    --secondary-color:#6c757d;
    --background-dark-color:#cbced8;
    --background-dark-color-2:#e4e4e4;
    --background-dark-color-3:#e4e4e4;
    --border-color:#f1f1f1;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(3,127,255,.3);
    --background-light-color-3:#0b48854a;
    --white-color:#151515;
    --white-color-2:#555151;
    --font-light-color:#313131;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --font-dark-color-3:#151515;
    --sidebar-dark-color:#e4e4e4;
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --icon-green-color:#2e2d53;
    --span-color:#474545;
    
}

.dark-theme{
    --primary-color:#007bff;
    --primary-color-light:#057bff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121a;
    --background-dark-color-2:#191d2b;
    --background-dark-color-3:#32384d;
    --border-color:#2e344e;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(3,127,255,.3);
    --background-light-color-3:#0b48854a;
    --white-color:#ffffff;
    --white-color-2:#a09a9a;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --font-dark-color-3:#fff;
    --sidebar-dark-color:#191d2b;
    --scrollbar-bg-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --icon-green-color:#82AB92;
    --span-color:#eee5e5;
}
 
//BODY
*{
     padding:0;
     margin:0;
     box-sizing:border-box;
     //list-style:none;
     text-decoration:none;
     font-family: 'Nunito', sans-serif;
     font-size:1rem;
    
 }

body{
     background-color: var(--background-dark-color);
     color:var(--font-light-color)
 }

 //SCROLL TO TOP
 body::-webkit-scrollbar{
 width:9px;
 background-color:#383838;
 }

 body::-webkit-scrollbar-thumb{
 border-radius:10px;
 background-color:#6b6b6b;
 }

 body::-webkit-scrollbar-track{
 border-radius:10px;
 background-color:#383838;
 }

 
//GLOBAL STYLES
 a{
     font-family :inherit;
     color:inherit; 
     font-size:inherit;
     font-size:.8rem;
 }

 h1{
    font-family: 'Source Serif Pro', serif;
     font-size: 1.5rem;
     color:var(--white-color);
     span{
        font-size: 2.5rem;
        color:var(--primary-color);
        @media screen and (max-width: 700px){
          font-size: 1rem;
         }
     }
     @media screen and (max-width: 700px){
          font-size: 1rem;
          
       }
    }

//UTILITY CLASS
 .u-margin-bottom{
    margin-bottom:4rem; 
 }

 //LIGHT-DARK THEME TOGGLER
 .light-dark-mode{
      position:absolute;  
      right:0;
      top:10%;
      width:6rem;
      height:2rem;
      z-index:15;
      display: flex;
      align-items:center;
      justify-content:center;
 }

@media screen and (max-width:850px) and (orientation:landscape){
    .light-dark-mode{
        position:absolute;  
        right:0;
        top:13%;
        
    }
   };

//MOBILE NAV TOGGLER
.hamburgerMenu{
        position: absolute;
        display: none;
        right:5%;
        top: 3%;
        z-index:15;
        svg{
            font-size:2rem;
            color:var(--white-color-2);
        }
    }
 
//CURRENT LOGGED IN USER
.loggedInUser{
        position:absolute;  
        right:2%;
        top:2%;
        display: flex;
        }

.accountIcon{
        margin-right: .5rem;
}

.accountName{
        margin-top: .1rem;
}

@media screen and (max-width:1000px){
.accountName{
        font-size:14px;
        }
    };

.burger-toggle{
        transform:translateX(0);
        z-index:20;
    }

  

//GLOBAL MEDIA QUERYS
 @media screen and (max-width:1000px){
.hamburgerMenu{
        display: block;
        }
    };

//MODAL PORTFOLIO (CAROUSEL)
.modal-dialog {
  display: flex;
  justify-content:center;
}
 .custom-modal-style {
     width:90vw;
     background-color: transparent;
     margin-top: 35%;
     text-align:center; 
     border:none; 
    }

 
.modal-content {
 background-color: #EFF3EB;
 border-radius: 8px;
}

// MODAL SUBSCRIBE/PLEASE LOGIN
.subscribeForm p {
    color: white;
    margin-top: 3rem;
    }

.subscribeForm input {
    margin-right: 16px;
    font-size: 1rem;
    padding: 0px 5px;
    border-radius:4px;
    border:1px solid white;
    box-shadow: 0 0 15px -2px #a0a59d;
  }

.subscribeForm button {
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius: 40px;
    background-color: #fff;
    border: 2px solid white;
    color: #80A467;
    box-shadow: 0 0 15px -2px #a0a59d;
    letter-spacing: 1px;
    text-shadow: 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 5px;
  }
  
  .subscribeForm button:hover {
    color: #fff;
    background-color: #80A467;
    outline: white;
  }
  
  .subscribeForm button:active {
    letter-spacing: 2px;
  }
  
  .modal-header {
    display: flex;
    justify-content: center;
  }
  
  .subscribeForm > div {
    display: flex;
    justify-content: center;
  }

  .modalbody.modal-body {
    display: flex;
    justify-content: center;
    color:black;
   }

.reviewFormContainer {
     width: 90%;
     margin: 4rem  auto;
   }

  
   .input-group-text {
      background-color:white;
      padding: 10px;
    }

    .errorstatus {
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: red;
    }
  }
`;

export default GlobalStyle;
