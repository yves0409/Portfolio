import React from "react";
import AboutImageSection from "../components/AboutImageSection";
import AboutReviewSection from "../components/AboutReviewSection";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layout";

const AboutScreen = () => {
  return (
    <MainLayout>
      <Title title={"About me"} span={"About me"} />
      <div>
        <AboutImageSection />
        <AboutReviewSection />
      </div>
    </MainLayout>
  );
};

export default AboutScreen;
