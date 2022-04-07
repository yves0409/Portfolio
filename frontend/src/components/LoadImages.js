import React from "react";
import { Card, Skeleton } from "antd";

//SKELETON
const LoadImages = ({ count }) => {
  const cards = () => {
    let totalCards = [];
    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card style={{ height: "360px" }} key={i}>
          <Skeleton active avatar={true}></Skeleton>
        </Card>
      );
    }
    return totalCards;
  };

  return <div className="mdplayer">{cards()}</div>;
};

export default LoadImages;
