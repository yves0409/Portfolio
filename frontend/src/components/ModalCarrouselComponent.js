import React from "react";
import { Modal } from "react-bootstrap";
import CarrouselPortfolio from "./CarrouselPortfolio";
import ModalCloseButton from "./ModalCloseButton";
import { InnerLayout } from "../styles/Layout";

const ModalCarrouselComponent = ({
  show,
  setShow,
  onCloseModalUnblur,
  title,
  thumbs,
}) => {
  const handleClose = () => {
    setShow(false);
    onCloseModalUnblur();
  };

  return (
    <InnerLayout>
      <Modal
        show={show}
        contentClassName="custom-modal-style"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>
          <CarrouselPortfolio thumbs={thumbs} />
          <ModalCloseButton buttonTxt={"Close"} clicked={handleClose} />
        </Modal.Body>
      </Modal>
    </InnerLayout>
  );
};

export default ModalCarrouselComponent;
