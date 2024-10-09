import css from "./imageCard.module.css";
import { Image } from "../App/App.types";
import React from "react";

interface ImageCardProps {
  image: Image;
  openModal: () => void;
  newModalImg: (image: Image) => void;
}

export default function imageCard({
  image,
  openModal,
  newModalImg,
}: ImageCardProps) {
  return (
    <div className={css.galleryImg}>
      <img
        onClick={() => {
          openModal();
          newModalImg(image);
        }}
        className={css.itemImg}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
