import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import dataServices from "../data/dataServices";
import { InnerLayout } from "../styles/Layout";

const ServiceSection = () => {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <div className="services">
          {dataServices.map((service) => (
            <ServiceCard
              className="imcard"
              key={service.id}
              image={service.image}
              title={service.title}
              paragraph={service.paragraph}
              url={service.url}
            />
          ))}
        </div>
      </ServiceSectionStyled>
    </InnerLayout>
  );
};

const ServiceSectionStyled = styled.div`
  .services {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ServiceSection;
