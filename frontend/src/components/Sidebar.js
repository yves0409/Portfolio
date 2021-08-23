import React from 'react'
import styled from "styled-components"
import Navigation from './Navigation'


const Sidebar = ({burgerToggle,setBurgerToggle}) => {
    return (
        <SideBarStyled className={`${burgerToggle ? "burger-toggle" : ""}`} >
            <Navigation hideSidebarOnItemClick={setBurgerToggle}/>
        </SideBarStyled>
    )
}

const SideBarStyled = styled.div`
 @media screen and (max-width:375px){
    width:100vw;
 };
 position:fixed;
 height:100vh;
 width:16.3rem;
 background-color:var(--sidebar-dark-color);
 overflow:hidden;
 transition: all .4s ease-in-out;
 @media screen and (max-width:1000px){
     transform: translateX(-100%);
     z-index:20;
 };
`

export default Sidebar
