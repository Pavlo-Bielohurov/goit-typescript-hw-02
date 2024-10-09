import { RotatingLines } from "react-loader-spinner";
import React from "react";

export default function loader() {
  return (
    <div>
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
