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
 width:16.3rem;
 position:fixed;
 height:100vh;
 background-color:var(--sidebar-dark-color);
 overflow:hidden;
 transition: all .4s ease-in-out;
 @media screen and (max-width:1000px){
     transform: translateX(-100%);
     z-index:20;
 };
`

export default Sidebar
