import React from "react";
import { MainLayout } from "../styles/Layout";
import AboutImageSection from "../components/AboutImageSection";
import AboutReviewSection from "../components/AboutReviewSection";
import Title from "../components/Title";

const AboutScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title title={"About me"} span={"About me"} />
        <AboutImageSection />
        <AboutReviewSection />
      </div>
    </MainLayout>
  );
};

export default AboutScreen;
