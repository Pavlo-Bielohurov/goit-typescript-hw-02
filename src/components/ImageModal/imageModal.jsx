import Modal from "react-modal";
import css from "./imageModal.module.css";

export default function imageModal({ isOpen, isClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.description}
        className={css.img}
      />
    </Modal>
  );
}
