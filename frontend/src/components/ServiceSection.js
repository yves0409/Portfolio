import React, { useEffect } from "react";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import ServiceCard from "./ServiceCard";
import { InnerLayout } from "../styles/Layout";
import { getInfo } from "../redux/actions/infoActions";
import { useSelector, useDispatch } from "react-redux";

const ServiceSection = () => {
  const dispatch = useDispatch();

  //STATE ACCESS
  const infoList = useSelector((state) => state.infoList);
  const { loading, success, error, infos } = infoList;

  useEffect(() => {
    dispatch(getInfo());
  }, [getInfo]);

  return (
    <InnerLayout>
      <ServiceSectionStyled>
        {loading ? (
          <LinearProgress color="primary" />
        ) : success ? (
          <div className="services">
            {infos[0].services.map((service) => (
              <ServiceCard
                key={service._id}
                image={service.serviceimage}
                title={service.title}
                paragraph={service.paragraph}
                url={service.url}
              />
            ))}
          </div>
        ) : (
          <div className="errorstatus">
            {" "}
            <h1>Services not found : {error}</h1>
            <p>Please try again later</p>
          </div>
        )}
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
