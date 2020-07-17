import React, { useState } from "react";
import Search from "./components/Search";
import GifArea from "./components/GifArea";
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
      <h1 className="text-center">Busca tu gif</h1>
      <Search handleClick={handleClick} />
      <GifArea search={searchInput} />
    </div>
  );
}

export default App;
