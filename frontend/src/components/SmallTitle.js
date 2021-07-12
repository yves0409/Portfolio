import React from 'react'
import styled from "styled-components"



const SmallTitle = ({icon,title}) => {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
           )
}

const SmallTitleStyled = styled.div`
   display: flex;
   align-items:center;
   p{
       padding-right:1rem;
   }
   h3{
       color: var(--white-color);
       font-size:1.2rem;
   }
`
export default SmallTitle;
