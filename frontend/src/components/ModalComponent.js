import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ModalComponent = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered animation backdrop>
      <Modal.Header>
        <Modal.Title>Enter a valid email to subribe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalStyled>
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </ModalStyled>
      </Modal.Body>
      <Modal.Body>
        If you subsribe you will receive updates and newsletters
      </Modal.Body>
      <Button variant="success" onClick={handleClose}>
        Close
      </Button>
    </Modal>
  );
};

const ModalStyled = styled.div`
  p {
    color: white;
    margin-top: 3rem;
  }
  input {
    margin-right: 16px;
    font-size: 1.3rem;
    padding: 3px 5px;
  }

  button {
    outline: none;
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius: 40px;
    background: #fff;
    border: 2px solid #1ecd97;
    color: #1ecd97;
    letter-spacing: 1px;
    text-shadow: 0;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 5px;
  }
  button:hover {
    color: white;
    background: #1ecd97;
  }
  button:active {
    letter-spacing: 2px;
  }
`;
export default ModalComponent;
