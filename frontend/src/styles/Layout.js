import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  width: 97%;
  @media screen and (max-width: 650px) {
    padding: 4rem;
  }
  @media screen and (max-width: 500px) {
    padding: 3rem;
  } ;
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
