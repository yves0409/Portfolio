import React from 'react'
import styled from "styled-components"


const PortfolioButton = ({filter,button}) => {
    return (
        <ButtonsStyled>
               {button.map((btn,i)=> {
               return <PortfolioButtonStyled key={i} onClick={()=> filter(btn)}>
                                 {btn}
                      </PortfolioButtonStyled>
                })}
        </ButtonsStyled>
    )
}

const PortfolioButtonStyled = styled.button`
    
   
    background-color: var(--background-dark-color);
    padding: .2rem 1.5rem;
    font-size:.8rem;
    color: var(--white-color);
    margin: .8rem .7rem;
    cursor: pointer;
    border:none;

    border-radius:4px;
  &:active{
   border-bottom:3px solid green;
  
 }
  &:hover{
    border-bottom:3px solid white;
  } 
`

const ButtonsStyled = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:70%;
    margin:2.4rem auto;
 `

export default PortfolioButton;

