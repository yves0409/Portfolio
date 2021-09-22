import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import axios from "axios";

const MediaPlayer = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getResults() {
      const results = await axios.get("/api/trending");
      setTrending(results.data);
    }
    getResults();
  }, []);

  return (
    <MediaPlayerStyled className="blog">
      {trending.map((item) => (
        <div key={item._id}>
          <ReactPlayer url={item.url} width="auto" />
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
