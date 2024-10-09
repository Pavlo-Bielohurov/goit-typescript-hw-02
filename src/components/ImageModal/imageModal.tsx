import Modal from "react-modal";
import css from "./imageModal.module.css";
import { Image } from "../App/App.types";
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  isClose: () => void;
  image: Image;
}

export default function imageModal({
  isOpen,
  isClose,
  image,
}: ImageModalProps) {
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
