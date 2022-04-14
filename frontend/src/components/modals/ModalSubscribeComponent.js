import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import ModalCloseButton from "../buttons/ModalCloseButton";

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
        <ModalCloseButton buttonTxt={closebtnTxt} clicked={handleClose} />
      </Modal>
    </ModalStyled>
  );
};

const ModalStyled = styled.div``;

export default ModalSubscribeComponent;
