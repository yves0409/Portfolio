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
    border:1px solid white;
    background-color: var(--background-dark-color);
    padding: .2rem 1.5rem;
    font-size:.8rem;
    color: var(--white-color);
    margin: .6rem .4rem;
    cursor: pointer;
    transition:all .4s ease-in-out;
    border-radius:4px;
 &:active,&:focus{
    border: 1px solid var(--white-color);
    box-shadow: 0 8px 16px 0 #f8eded33, 0 6px 20px 0 
    #f8f6f62f;
 }
  &:hover{
    box-shadow: 0 8px 16px 0 #dbd5d533, 0 6px 20px 0 
    #f3efef30;
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

