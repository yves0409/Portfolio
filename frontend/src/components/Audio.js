import React from "react";
import ReactAudioPlayer from "react-audio-player";
import typing from "../images/typewriter.mov";

const Audio = () => {
  return (
    <div style={{ display: "none" }}>
      <ReactAudioPlayer src={typing} autoPlay={true} />
    </div>
  );
};

export default Audio;
