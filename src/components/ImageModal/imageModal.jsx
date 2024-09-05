import Modal from "react-modal";
// import css from "./imageModal.module.css";

export default function imageModal({ isOpen, isClose, image }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={isClose}>
      <img src={image.urls.regular} alt={image.description} />
    </Modal>
  );
}
