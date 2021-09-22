import React from "react";
import BackGroundSection from "../components/ServiceBackGroundSection";
import SkillsSection from "../components/ServiceSkillsSection";
import { MainLayout } from "../styles/Layout";
import ServiceSection from "../components/ServiceSection";

const ServiceScreen = () => {
  return (
    <MainLayout>
      <ServiceSection />
      <SkillsSection />
      <BackGroundSection />
    </MainLayout>
  );
};

export default ServiceScreen;
