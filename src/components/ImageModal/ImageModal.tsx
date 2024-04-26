import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FC } from "react";
import { selectedPhoto } from "../App/AppTypes";
import { ImageModalProps } from "./ImageModalType";

Modal.setAppElement("root");

const ImageModal: FC<ImageModalProps> = ({
  isOpen = false,
  photo,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
    >
      <img className={css.imgCard} src={photo.src} alt={photo.description} />
      <p>{photo.description}</p>
    </Modal>
  );
};

export default ImageModal;
