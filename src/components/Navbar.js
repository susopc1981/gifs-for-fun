import React from "react";
import ButtonPage from "./ButtonPage";
import SelectQuanty from "./SelectQuanty";

function Navbar(props) {
  let total = props.total;
  // if (props.total > 5000) {
  //   total = 5000;
  // }
  let max = props.page * props.qty;
  if (props.page * props.qty > 5000) {
    max = 5000;
  }
  if (props.page * props.qty > total) {
    max = total;
  }

  return (
    <div>
      <div>
        {props.page === 1 ? (
          <>
            <ButtonPage
              value="<<"
              option="firstPage"
              onClick={props.onClick}
              disabled="true"
            />
            <ButtonPage
              value="<"
              option="prevPage"
              onClick={props.onClick}
              disabled="true"
            />
          </>
        ) : (
          <>
            <ButtonPage value="<<" option="firstPage" onClick={props.onClick} />
            <ButtonPage value="<" option="prevPage" onClick={props.onClick} />
          </>
        )}
        {props.page === props.totalPage ? (
          <>
            {" "}
            <ButtonPage
              value=">"
              option="nextPage"
              onClick={props.onClick}
              disabled="true"
            />
            <ButtonPage
              value=">>"
              option="lastPage"
              onClick={props.onClick}
              disabled="true"
            />
          </>
        ) : (
          <>
            <ButtonPage value=">" option="nextPage" onClick={props.onClick} />
            <ButtonPage value=">>" option="lastPage" onClick={props.onClick} />
          </>
        )}
        <SelectQuanty onChange={props.onChange} />
      </div>
      <p>
        Página {props.page} de {props.totalPage}
      </p>
      <p>
        Resultados {(props.page - 1) * props.qty + 1}-{max} de {props.total}
      </p>
    </div>
  );
}

export default Navbar;
