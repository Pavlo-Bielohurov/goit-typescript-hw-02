import css from "./loadMoreBtn.module.css";
import React from "react";

interface LoadMoreProps {
  onClick: () => void;
  loadMoreBtnRef: React.RefObject<HTMLButtonElement>;
}

export default function loadMoreBtn({
  onClick,
  loadMoreBtnRef,
}: LoadMoreProps): JSX.Element {
  return (
    <button onClick={onClick} ref={loadMoreBtnRef} className={css.btn}>
      Search more...
    </button>
  );
}
