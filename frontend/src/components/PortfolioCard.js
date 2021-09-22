import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReactPlayer from "react-player";

const PortfolioCard = ({ menuItem }) => {
  return (
    <PortfolioCardStyled className="portfolio">
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item._id}>
            <div className="portfolio-content">
              <div className="portfolio-image" key={item._id}>
                <ReactPlayer url={item.url} width="auto" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <p className="frameworks">
                <span>Languages/Frameworks:</span> {item.frameworks}
              </p>
            </div>
          </div>
        );
      })}
    </PortfolioCardStyled>
  );
};

const PortfolioCardStyled = styled.div`
  .grid-item {
    border: 2px solid var(--icon-green-color);
    border-radius: 6px;
    padding: 0.8rem;

    .portfolio-content {
      display: block;
      position: relative;
      .title {
        font-size: 1.2rem;
        margin-top: 1rem;
        color: var(--icon-green-color);
      }
      .description {
        font-size: 1.1rem;
      }
      span {
        text-transform: uppercase;
        color: grey;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: 2%;
        top: 4%;
        height: 0;
        width: 0;
        transition: all 0.4s ease-in-out;
      }
    }
    .portfolio-image:hover {
      ul {
        transform: translateY(0);
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease-in-out;
        opacity: 1;
        li {
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--font-dark-color);
            filter: drop-shadow(0 0 0.9rem var(--icon-green-color));
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        li:hover {
          svg {
            color: var(--white-color);
          }
        }
        svg {
          font-size: 2rem;
          transition: all 0.4s ease-in-out;
        }
      }
      &::before {
        transform: scale(1);
        transition: all 0.4s ease-in-out;
      }
    }
  }
`;
export default PortfolioCard;
