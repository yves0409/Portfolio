import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "./titles/Title";
import ServiceProgressCircle from "./ServiceProgressCircle";
import LinearProgress from "@material-ui/core/LinearProgress";
import { InnerLayout } from "../styles/Layout";
import { getInfo } from "../redux/actions/infoActions";
import { useSelector, useDispatch } from "react-redux";

const ServiceSkillsSection = () => {
  const dispatch = useDispatch();

  const infoList = useSelector((state) => state.infoList);
  const { loading, infos, success, error } = infoList;

  useEffect(async () => {
    dispatch(getInfo());
  }, [dispatch]);

  return (
    <SkillsStyled>
      <Title title={"Languages/ markup"} span={"Languages/ markup"} />

      <InnerLayout>
        <div className="skills">
          {success ? (
            infos[0].skills.map((info) => (
              <ServiceProgressCircle
                key={info._id}
                title={info.title}
                percentage={info.percentage}
                img={info.img}
              />
            ))
          ) : loading ? (
            <LinearProgress />
          ) : (
            <div className="errorstatus">
              {" "}
              <h1>Could not get information : {error}</h1>
              <p>Please try again later</p>
            </div>
          )}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.8rem;
    grid-column-gap: 1.8rem;
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export default ServiceSkillsSection;
