import React from "react";
import { Card, Skeleton } from "antd";

//SKELETON
const Skeletons = ({ count, className }) => {
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

  return <div className={className}>{cards()}</div>;
};

export default Skeletons;
