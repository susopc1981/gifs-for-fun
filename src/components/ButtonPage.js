import React from "react";

function ButtonPage(props) {
  return (
    <button
      type="button"
      value={props.action}
      disabled={props.disabled}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}

export default ButtonPage;
