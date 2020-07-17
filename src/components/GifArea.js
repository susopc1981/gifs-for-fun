import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getApi } from "../api/getApi";

class GifArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Ruta: data<[index]<images<original<url

  async componentDidMount() {
    const data = await getApi(this.props.search);
    this.setState({ trendingUrls: data });
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps.search, this.props.search);
    if (this.props.search !== prevProps.search) {
      const data = await getApi(this.props.search);
      this.setState({ trendingUrls: data });
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
