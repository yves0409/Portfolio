import React from 'react'
import styled from "styled-components"


const PrimaryButton = ({title}) => {
    return (
        <PrimaryButtonStyled>
           {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    padding: .1rem .5rem;
    color: var(--white-color);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    position: relative;
    border-radius:4px;
    transition: all .4s ease-in-out;
    margin-bottom: 1rem;
&::after{
    content: "";
    position:absolute;
    width: 0;
    height: .2rem; 
    left:0;
    bottom:0;
    opacity:.9;
}
&:hover::after{
    width: 100%;
    background-color: var(--primary-color);
    transition: all .4s ease-in-out;
     
}
`

export default PrimaryButton
