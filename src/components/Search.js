import React from "react";
import { Button, Input } from "reactstrap";

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
      <div className="d-flex">
        <Input type="text" onChange={this.handleChange}></Input>
        <Button
          className="btn btn-warning"
          onClick={() => this.props.handleClick(this.state.inputSearch)}
        >
          Buscar
        </Button>
      </div>
    );
  }
}
export default Search;
