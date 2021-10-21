import React from "react";
import styled from "styled-components";
import Title from "./Title";
import ProgressCircle from "./ProgressCircle";
import dataSkillsProgress from "../data/dataSkillsProgress";
import { InnerLayout } from "../styles/Layout";

const ServiceSkillsSection = () => {
  return (
    <SkillsStyled>
      <Title title={"Languages/ markup"} span={"Languages/ markup"} />
      <InnerLayout>
        <div className="skills">
          {dataSkillsProgress.map((skill) => (
            <ProgressCircle
              key={skill.id}
              title={skill.title}
              percentage={skill.percentage}
              img={skill.img}
            />
          ))}
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
