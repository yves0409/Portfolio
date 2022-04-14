import React from "react";
import Title from "../components/titles/Title";
import { MainLayout } from "../styles/Layout";

const WebDevScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title title={"Web Development"} span={"Web Development"} />
        <h1 style={{ marginTop: "6rem" }}>Coming soon ...</h1>
      </div>
    </MainLayout>
  );
};

export default WebDevScreen;
