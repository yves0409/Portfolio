import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "./titles/Title";
import SmallTitle from "./titles/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BackgroundItem from "./ServiceBackgroundItem";
import { useSelector, useDispatch } from "react-redux";
import { getBackground } from "../redux/actions/backgroundActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { InnerLayout } from "../styles/Layout";

const ServiceBackGroundSection = () => {
  const briefcase = <BusinessCenterIcon />;

  const dispatch = useDispatch();

  //STATE ACCESS
  const backgroundList = useSelector((state) => state.backgroundList);
  const { loading, backgrounds, success, error } = backgroundList;

  useEffect(() => {
    dispatch(getBackground());
  }, [getBackground]);

  return (
    <BackGroundSectionStyled>
      <Title title={"background"} span={"background"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>

        {loading ? (
          <LinearProgress color="primary" />
        ) : success ? (
          <div className="Background-content">
            {backgrounds.map((item) => (
              <BackgroundItem
                key={item._id}
                year={item.year}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
              />
            ))}{" "}
          </div>
        ) : (
          <div className="errorstatus">
            {" "}
            <h1>Background not found : {error}</h1>
            <p>Please try again later</p>
          </div>
        )}
      </InnerLayout>
    </BackGroundSectionStyled>
  );
};

const BackGroundSectionStyled = styled.div`
  .small-title {
    padding-bottom: 2.5rem;
  }
  .Background-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default ServiceBackGroundSection;
