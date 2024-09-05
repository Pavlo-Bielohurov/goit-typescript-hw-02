import css from "./imageCard.module.css";

export default function imageCard({ image, openModal, newModalImg }) {
  return (
    <div className={css.itemImg}>
      <img
        onClick={() => {
          openModal();
          newModalImg(image);
        }}
        className={css.galleryImg}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
