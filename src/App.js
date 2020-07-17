import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
// HACER UNA LLAMADA A UN API PARA QUE NOS MUESTRE LOS TRENDING
// UN BUSCADOR QUE NOS DEVUELVA LOS GIPH QUE BUSQUEMOS POR REFERENCIA
function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
