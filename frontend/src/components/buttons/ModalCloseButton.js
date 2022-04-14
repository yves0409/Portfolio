import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ModalCloseButton = ({ buttonTxt, clicked }) => {
  return (
    <ModalButtonStyled>
      <Button className="closeBtnModal" onClick={clicked}>
        <div className="text1">{buttonTxt}</div>
        <div className="text2">
          {" "}
          <HighlightOffIcon />{" "}
        </div>
      </Button>
    </ModalButtonStyled>
  );
};

const ModalButtonStyled = styled.div`
  .closeBtnModal {
    background-color: transparent;
    border-radius: 8px;
    color: black;
    .text1 {
      display: none;
    }
  }

  .closeBtnModal:hover {
    background-color: transparent;
    border-radius: 8px;
    color: black;
    .text1 {
      display: block;
    }
    .text2 {
      display: none;
    }
  }
`;

export default ModalCloseButton;
