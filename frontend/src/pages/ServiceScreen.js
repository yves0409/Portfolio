import React from "react";
import BackGroundSection from "../components/ServiceBackGroundSection";
import SkillsSection from "../components/ServiceSkillsSection";
import { MainLayout } from "../styles/Layout";
import ServiceSection from "../components/ServiceSection";
import Title from "../components/Title";

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
