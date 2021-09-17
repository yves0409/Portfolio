import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
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
    --icon-green-color:#2d533e;
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
    --white-color:#fff;
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
 *{
     padding:0;
     margin:0;
     box-sizing:border-box;
     list-style:none;
     text-decoration:none;
     font-family: 'Nunito', sans-serif;
     font-size:1rem;
    
 }

 body{
     background-color: var(--background-dark-color);
     color:var(--font-light-color)
 }
//scroll
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

//utility class
 .u-margin-bottom{
    margin-bottom:4rem; 
 }

 //Floating toggler
 .light-dark-mode{
      position:absolute;  
      right:0;
      top:13%;
      transition: top 0.3s;
      background-color:transparent;
      width:6rem;
      height:2rem;
      z-index:15;
      display: flex;
      align-items:center;
      justify-content:center;
 svg{
        display: flex;
        align-items:center;
        font-size:1.5rem;
        color:var(---white-color-2) 
        
      
       }
    }



@media screen and (max-width:850px) and (orientation:landscape){
    .light-dark-mode{
        position:absolute;  
        right:0;
        top:13%;
        
    }
   };

 //navtoggler
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
   
.loggedInUser{
        position:absolute;  
        right:2%;
        top:2%;
  
  }

.burger-toggle{
        transform:translateX(0);
        z-index:20;
    }

//Global mediaQueries
 @media screen and (max-width:1000px){
.hamburgerMenu{
        display: block;
        }
    };


`

export default GlobalStyle;