import css from "./loadMoreBtn.module.css";

export default function loadMoreBtn({ onClick, loadMoreBtnRef }) {
  return (
    <button onClick={onClick} ref={loadMoreBtnRef} className={css.btn}>
      Search more...
    </button>
  );
}
