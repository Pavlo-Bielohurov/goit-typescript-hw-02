import css from "./imageCard.module.css";

export default function imageCard({ image }) {
  return (
    <div className={css.itemImg}>
      <img
        className={css.galleryImg}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
}
