import React from "react";
import { Image } from "../App/App.types";
import ImageCard from "../ImageCard/imageCard";
import css from "./imageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: () => void;
  newModalImg: (image: Image) => void;
}

export default function imageGallery({
  images,
  openModal,
  newModalImg,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard
            image={image}
            openModal={openModal}
            newModalImg={newModalImg}
          />
        </li>
      ))}
    </ul>
  );
}
