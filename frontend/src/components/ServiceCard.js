import React from 'react'
import styled from "styled-components"
//import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ServiceCard = ({image,title,paragraph,url,history}) => {

 
    return (
        <ServiceCardStyled >
            <div className="container" >
                <img src={image} alt="Smashicons,surang,good ware,icongeek26" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
                <Link to={`${url}`}>More...</Link>

            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
background-color: var(--background-dark-color-2);
border-left:1px solid var(--border-color);
border-right:1px solid var(--border-color);
border-top:7px solid var(--border-color);
border-bottom:1px solid var(--border-color);
transition:all .4s ease-in-out;
&:hover{
    border-top:7px solid var(--primary-color); 
    transform:translateY(-3px)  
}
  .container{
    padding:1.2rem;
    h4{
        color:var(--white-color);
        font-size:1.4rem;
        padding:1rem 0;
        position:relative;
        
        &::after{
         content:"";
         width:4rem;
         background-color: var(--border-color);
         height:3px;
         position:absolute;
         left:0;
         bottom:0;
         border-radius:10px;
        }
    }
    p{
        padding:.8rem 0; 
        font-size:.8rem;
    }
      img{
          width:100px;
          height:100px;
          }
  }
 
`
export default ServiceCard
