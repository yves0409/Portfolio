import React, { useState } from "react";
import Title from "../components/Title";
import styled from "styled-components";
import dataPortfolioCard from "../data/dataPortfolioCard";
import PortfolioCards from "../components/PortfolioCards";
import { Container, Row, Col } from "react-bootstrap";
import { MainLayout } from "../styles/Layout";

const PortfolioScreen = ({ setBurgerToggle, burgerToggle }) => {
  //   const [portfolios, setPortfolios] = useState([]);
  //const [menuItem, setMenuItem] = useState(projectInfo);
  //   const [loader, setLoader] = useState(true);
  //const button = ["All", ...new Set(projectInfo.map((item) => item.category))];
  //   useEffect(() => {
  //     axios
  //       .get("/api/portfolio")
  //       .then((response) => {
  //         const { data } = response;
  //         setPortfolios(data);
  //         setMenuItem(data);
  //         data && setLoader(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  //   const filter = (button) => {
  //     if (button === "All") {
  //       setMenuItem(portfolios);
  //       return;
  //     }
  //     const filteredData = portfolios.filter((item) => item.category === button);
  //     setMenuItem(filteredData);
  //   };
  //   return (
  //     <MainLayout>
  //       <CardStyled>
  //         <Title title={"Portfolios"} span={"Portfolios"} />
  //         <InnerLayout>
  //           <PortfolioButton filter={filter} button={button} />
  //           {loader ? (
  //             <LinearProgress color="primary" />
  //           ) : (
  //             <PortfolioCard menuItem={menuItem} />
  //           )}
  //         </InnerLayout>
  //       </CardStyled>
  //     </MainLayout>
  //   );
  const [blur, setBlur] = useState(false);

  const blurred = () => {
    setBlur(!blur);
  };

  const unBlurred = () => {
    setBlur(!blur);
  };

  // const filter = (button) => {
  //   if (button === "All") {
  //     setMenuItem(projectInfo);
  //     return;
  //   }
  //   const filteredData = projectInfo.filter((item) => item.category === button);
  //   setMenuItem(filteredData);
  // };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />

      <BlurStyled>
        {/* <PortfolioButton filter={filter} button={button} /> */}
        <Container className={`${blur ? "blurred" : "unblurred"}`}>
          <h3 className="title">
            As a designer & user interface developer based in Los Angeles, I
            create engaging online experiences for users. It’s a fine balance of
            applying technology, design, research, and experimentation.
          </h3>
          <Row className="row">
            {dataPortfolioCard.map((item) => (
              <Col className="col" key={item.id}>
                <PortfolioCards
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  frameworks={item.frameworks}
                  git={item.git}
                  onClickIsBlurred={blurred}
                  closeModalClicked={unBlurred}
                  /* menuItem={menuItem} */
                />{" "}
              </Col>
            ))}
          </Row>
        </Container>
      </BlurStyled>
    </MainLayout>
  );
};

// const CardStyled = styled.div`
//   .portfolio {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-column-gap: 2rem;
//     grid-row-gap: 3rem;
//     @media screen and (max-width: 1300px) {
//       grid-template-columns: repeat(1, 1fr);
//       width: 70%;
//       margin: 0 auto;
//     }
//     @media screen and (max-width: 900px) {
//       width: 100%;
//       margin: 0 auto;
//       padding: 0;
//     }
//   }
// `;
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
