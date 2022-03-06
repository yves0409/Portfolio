import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LoadImages from "./LoadImages";

const MediaPlayer = ({ trendings }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadImages count={4} />}
      <MediaPlayerStyled className="blog">
        {trendings.map((item) => (
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
