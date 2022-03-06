import React, { useState } from "react";
import styled from "styled-components";
import ModalCarrouselComponents from "./ModalCarrouselComponents";
import gitImage from "../images/gitdesign.png";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";

const PortfolioCard = ({
  image,
  title,
  git,
  thumbs,
  onClickIsBlurred,
  closeModalClicked,
}) => {
  const [show, setShow] = useState(false);

  const showModalHandler = () => {
    setShow(!show);
    onClickIsBlurred();
  };

  const closeModalHandler = () => {
    closeModalClicked();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      click for github repo
    </Tooltip>
  );

  return (
    <CardStyled>
      <Card className="card">
        <Card.Header className="header">
          <Card.Title>{title}</Card.Title>
          <Card.Title>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <a href={git} target="_blank" rel="noopener noreferrer">
                <img className="git" src={gitImage} alt="" />
              </a>
            </OverlayTrigger>
          </Card.Title>
        </Card.Header>

        <Card.Body onClick={showModalHandler}>
          <Card.Img variant="top" src={image} className="cardImg" />
        </Card.Body>
      </Card>
      {show && (
        <ModalCarrouselComponents
          show={show}
          setShow={setShow}
          onCloseModalUnblur={closeModalHandler}
          title={title}
          thumbs={thumbs}
        />
      )}
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;

  .card {
    width: 22rem;
    height: auto;
    background-color: #689473;
    border-radius: 6px;
    color: white;
  }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card .git {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    .card {
      width: 22rem;
      height: auto;
    }
  }

  .card:hover {
    transition: background-color 0.3s ease;
    background-color: #689473;
    transform: scale(1.1);
    opacity: 1;
  }
  .card-body {
    padding: 0px;
    cursor: pointer;
  }

  .cardImg {
    max-width: 100%;
    height: auto;
    opacity: 0.6;
  }

  .cardImg:hover {
    opacity: 1;
  }

  .blurred {
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }

  .header {
    padding: 5px;
  }

  .header > * {
    padding: 0;
    margin: 0;
  }
`;

export default PortfolioCard;
