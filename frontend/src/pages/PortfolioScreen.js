import React, { useState } from "react";
import { InnerLayout, MainLayout } from "../styles/Layout";
import Title from "../components/Title";
//import PortfolioCard from "../components/PortfolioCard";
//import PortfolioButton from "../components/PortfolioButton";
import styled from "styled-components";
//import axios from "axios";
//import LinearProgress from "@material-ui/core/LinearProgress";
import { Container, Row, Col } from "react-bootstrap";
import dataPortfolioCard from "../data/dataPortfolioCard";
import PortfolioCards from "../components/PortfolioCards";

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
        <InnerLayout>
          {/* <PortfolioButton filter={filter} button={button} /> */}
          <Container className={`${blur ? "blurred" : ""}`}>
            <h3 className="title">
              As a designer & user interface developer based in Los Angeles, I
              create engaging online experiences for users. It’s a fine balance
              of applying technology, design, research, and experimentation.
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
        </InnerLayout>
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
  margin-top: 1rem;

  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  .row {
    margin-top: 2rem;
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
    max-width: 80vw;
    margin: 0px auto;
    font-size: 1.5rem;
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
