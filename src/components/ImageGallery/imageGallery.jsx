import ImageCard from "../ImageCard/imageCard";
import css from "./imageGallery.module.css";

export default function imageGallery({ images, openModal, newModalImg }) {
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
