import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";

class GifArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Ruta: data<[index]<images<original<url
  getApi = async () => {
    let url =
      "https://api.giphy.com/v1/gifs/trending?api_key=LlMFRKH1LFUFQwmF51v05p3dm9TFYUf0";
    if (this.props.search !== "") {
      url =
        "https://api.giphy.com/v1/gifs/search?api_key=LlMFRKH1LFUFQwmF51v05p3dm9TFYUf0&limit=5&q=" +
        this.props.search;
    }
    console.log(url);
    const result = await fetch(url);
    const resultJson = await result.json();
    const arrayUrls = resultJson.data.map((value) => value.images.original.url);
    console.log(arrayUrls[0]);
    this.setState({ trendingUrls: arrayUrls });
  };
  componentDidMount() {
    this.getApi();
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps.search, this.props.search);
    if (this.props.search !== prevProps.search) {
      this.getApi();
    }
  }

  render() {
    if (this.state.trendingUrls) {
      console.log(this.state.trendingUrls[0]);
    }
    return (
      <div>
        <Container>
          <Row>
            {this.state.trendingUrls ? (
              this.state.trendingUrls.map((value) => {
                return (
                  <Col xs="3">
                    <span>
                      <img className="img-fluid p-1" src={value} alt="gif" />
                    </span>
                  </Col>
                );
              })
            ) : (
              <span>
                <p>Estamos trabajando en ello</p>
                <Spinner color="danger" />
              </span>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export default GifArea;
