import React from "react";
import BackGroundSection from "../components/ServiceBackGroundSection";
import SkillsSection from "../components/ServiceSkillsSection";
import ServiceSection from "../components/ServiceSection";
import Title from "../components/titles/Title";
import { MainLayout } from "../styles/Layout";

const ServiceScreen = () => {
  return (
    <MainLayout>
      <Title title={"services"} span={"services"} />
      <ServiceSection />
      <SkillsSection />
      <BackGroundSection />
    </MainLayout>
  );
};

export default ServiceScreen;
