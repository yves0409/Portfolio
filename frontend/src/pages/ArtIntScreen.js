import React from "react";
import Title from "../components/titles/Title";
import { MainLayout } from "../styles/Layout";

const ArtIntScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title
          title={"Artificial Intelligence"}
          span={"Artificial Intelligence"}
        />
        <h1 style={{ marginTop: "6rem" }}>Coming soon ...</h1>
      </div>
    </MainLayout>
  );
};

export default ArtIntScreen;
