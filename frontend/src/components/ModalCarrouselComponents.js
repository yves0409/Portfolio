import React from "react";
import { Button, Modal } from "react-bootstrap";
import CarrouselPortfolio from "./CarrouselPortfolio";

const ModalCarrouselComponents = ({
  show,
  setShow,
  onCloseModalUnblur,
  id,
  title,
  description,
}) => {
  const handleClose = () => {
    setShow(false);
    onCloseModalUnblur();
  };

  return (
    <Modal
      show={show}
      contentClassName="custom-modal-style"
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body className="bod">
        <CarrouselPortfolio carrouselId={id} />
        <Button variant="outline-success" size="sm" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCarrouselComponents;
