import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Skeletons from "../loaders/Skeletons";

const MediaPlayer = ({ trendings, error, success }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {error ? (
        <div className="errorstatus">
          {" "}
          <h1>No Videos found : {error}</h1>
          <p>Please try again later</p>
        </div>
      ) : (
        loading && <Skeletons count={4} className={"mdplayer"} />
      )}

      <MediaPlayerStyled className="mdplayer">
        {success &&
          trendings.map((item) => (
            <div key={item._id}>
              <ReactPlayer
                url={item.url}
                width="auto"
                onReady={() => setLoading(false)}
              />
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.text}</p>
              <a
                href={item.link}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to go to Original Video
              </a>
            </div>
          ))}
      </MediaPlayerStyled>
    </>
  );
};

const MediaPlayerStyled = styled.div`
  .title {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: var(--icon-green-color);
  }
  .link {
    cursor: pointer;
    :hover {
      color: var(--primary-color-light);
    }
  }
`;

export default MediaPlayer;
