import React, { useState } from "react";
import Search from "./components/Search";
// HACER UNA LLAMADA A UN API PARA QUE NOS MUESTRE LOS TRENDING
// UN BUSCADOR QUE NOS DEVUELVA LOS GIPH QUE BUSQUEMOS POR REFERENCIA
function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleClick = (text) => {
    setSearchInput(text);
    //Llamada API
  };

  return (
    <div className="App">
      <Search handleClick={handleClick} />
    </div>
  );
}

export default App;
