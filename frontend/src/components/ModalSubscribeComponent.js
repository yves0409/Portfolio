import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ModalSubscribeComponent = ({ title, body, closebtnTxt, body2 }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <ModalStyled>
      <Modal show={show} onHide={handleClose} centered animation backdrop>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="subscribeForm">{body2}</div>
        </Modal.Body>
        <Modal.Body className="modalbody">{body}</Modal.Body>
        <Button className="closeBtnModal" onClick={handleClose}>
          <div className="text1">{closebtnTxt}</div>
          <div className="text2">
            {" "}
            <HighlightOffIcon />{" "}
          </div>
        </Button>
      </Modal>
    </ModalStyled>
  );
};

const ModalStyled = styled.div``;
export default ModalSubscribeComponent;
