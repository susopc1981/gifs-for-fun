import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputSearch: "" };
  }

  handleChange = (event) => {
    this.setState({ inputSearch: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={() => this.props.handleClick(this.state.inputSearch)}>
          Búsqueda Aquí
        </button>
      </div>
    );
  }
}
export default Search;
