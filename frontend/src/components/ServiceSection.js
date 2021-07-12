import React from 'react'
import styled from "styled-components"
import {InnerLayout} from "../styles/Layout"
import ServiceCard from './ServiceCard'
import Title from './Title'
import services from "../data/services"


const ServiceSection = () => {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={"services"} span={"services"}/>
                <div className="services">
                    {services.map(service => <ServiceCard 
                        key={service.id} 
                        image={service.image} 
                        title={service.title} 
                        paragraph={service.paragraph}/>)}
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
       
    )
}
const ServiceSectionStyled = styled.div`
  .services{
     margin-top: 4rem;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-gap:2rem;
  @media screen and (max-width:1200px){
        grid-template-columns: repeat(2, 1fr);
    };
  @media screen and (max-width:750px){
        grid-template-columns: repeat(1, 1fr);
    };
}
`
export default ServiceSection
