import React from "react";
import css from "./eroorMessage.module.css";

export default function errorMesange(): JSX.Element {
  return (
    <div>
      <p className={css.text}>
        Sorry, there was an error and the server is not responding. Please try
        again later
      </p>
    </div>
  );
}
