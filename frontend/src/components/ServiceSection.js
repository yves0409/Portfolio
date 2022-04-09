import React, { useEffect } from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { InnerLayout } from "../styles/Layout";
import { getServices } from "../redux/actions/serviceActions";
import { useSelector, useDispatch } from "react-redux";
import Spinners from "./Spinners";

const ServiceSection = () => {
  const dispatch = useDispatch();

  //STATE ACCESS
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, services } = serviceList;

  useEffect(() => {
    dispatch(getServices());
  }, [getServices]);

  console.log("redux fetched => ", services);

  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <div className="services">
          {loading && !services ? (
            <Spinners />
          ) : (
            services.map((service) => (
              <ServiceCard
                className="imcard"
                key={service._id}
                image={service.image}
                title={service.title}
                paragraph={service.paragraph}
                url={service.url}
              />
            ))
          )}
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
