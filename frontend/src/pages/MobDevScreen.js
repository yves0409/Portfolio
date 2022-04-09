import React from "react";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layout";

const MobDevScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title title={"Mobile Development"} span={"Mobile Development"} />
        <h1 style={{ marginTop: "6rem" }}>Coming soon ...</h1>
      </div>
    </MainLayout>
  );
};

export default MobDevScreen;
