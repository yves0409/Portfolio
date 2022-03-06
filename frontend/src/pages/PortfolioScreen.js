import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import styled from "styled-components";
import { getPortfolio } from "../redux/actions/portfolioActions";
import { useSelector, useDispatch } from "react-redux";
import PortfolioCards from "../components/PortfolioCards";
import { Container, Row, Col } from "react-bootstrap";
import { MainLayout } from "../styles/Layout";
import Spinners from "../components/Spinners";

const PortfolioScreen = ({ setBurgerToggle, burgerToggle }) => {
  const [blur, setBlur] = useState(false);

  const dispatch = useDispatch();

  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, portfolios } = portfolioList;

  useEffect(() => {
    dispatch(getPortfolio());
  }, [getPortfolio]);

  const blurred = () => {
    setBlur(!blur);
  };

  const unBlurred = () => {
    setBlur(!blur);
  };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />

      <BlurStyled>
        <Container className={`${blur ? "blurred" : "unblurred"}`}>
          <h3 className="title">
            As a designer & user interface developer based in Los Angeles, I
            create engaging online experiences for users. It’s a fine balance of
            applying technology, design, research, and experimentation.
          </h3>
          <Row className="row">
            {loading ? (
              <Spinners />
            ) : (
              portfolios.map((item) => (
                <Col className="col" key={item._id}>
                  <PortfolioCards
                    image={item.image}
                    title={item.title}
                    thumbs={item.thumbs}
                    git={item.git}
                    onClickIsBlurred={blurred}
                    closeModalClicked={unBlurred}
                  />{" "}
                </Col>
              ))
            )}
          </Row>
        </Container>
      </BlurStyled>
    </MainLayout>
  );
};

const BlurStyled = styled.div`
  .unblurred {
    margin: 0px auto;
  }

  .row {
    margin-top: 2rem;
  }

  @media screen and (min-width: 1000px) {
    .row {
      animation: slideRight 1s ease-in-out forwards;
    }
    @keyframes slideRight {
      0% {
        transform: translateX(900px) scale(0.1);
      }
      100% {
        transform: translateX(0px) scale(1);
      }
    }
  }

  .col {
    padding: 5px;
  }

  .sc-gKAaRy {
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .title {
    color: var(--white-color);
    font-size: 1.3rem;
    margin-top: 5rem;
  }
  .blurred {
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  @media screen and (max-width: 576px) {
    .title {
      font-size: 1rem;
    }
  }
`;
export default PortfolioScreen;
