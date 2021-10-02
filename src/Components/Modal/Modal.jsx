import { Overlay, Modal } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

function ModalWindow({ image, handleModal, state }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "Escape" && state === true) {
        handleModal();
      }
    },
    [handleModal, state]
  );

  useEffect(() => {
    if (state === true) {
      window.addEventListener("keydown", handleKeyDown);
    }

    if (state === false) {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown, state]);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <Modal>
        <img src={image} alt="" />
      </Modal>
    </Overlay>,
    modalRoot
  );
}

ModalWindow.propTypes = {
  state: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
};

export default ModalWindow;
