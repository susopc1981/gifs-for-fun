import React from "react";

function SelectQuanty(props) {
  return (
    <>
      <label>Resultados por página</label>
      <select name="qty" onChange={props.onChange}>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
      </select>
    </>
  );
}

export default SelectQuanty;
