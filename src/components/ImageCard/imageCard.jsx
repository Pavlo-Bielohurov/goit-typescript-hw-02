import css from "./imageCard.module.css";

export default function imageCard({ image, openModal, newModalImg }) {
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
