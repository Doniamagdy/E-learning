import React from "react";

function Button({type, title, style}) {
  return (
    <button type={type} className={style}>
      {title}
    </button>
  );
}

export default Button;
