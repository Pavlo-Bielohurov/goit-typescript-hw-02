import ImageCard from "../ImageCard/imageCard";
import css from "./imageGallery.module.css";

export default function imageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
