import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getApi } from "../api/getApi";

const GifAreaF = (props) => {
  const [gifUrls, setGifUrls] = useState();
  //Ruta: data<[index]<images<original<url

  // async componentDidMount() {
  //   const data = await getApi(this.props.search);
  //   this.setState({ trendingUrls: data });
  // }

  // async componentDidUpdate(prevProps) {
  //   console.log(prevProps.search, this.props.search);
  //   if (this.props.search !== prevProps.search) {
  //     const data = await getApi(this.props.search);
  //     this.setState({ trendingUrls: data });
  //   }
  // }

  useEffect(() => {
    console.log("Hola");
    async function fetchData() {
      const data = await getApi(props.search);
      setGifUrls(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {gifUrls ? (
            gifUrls.map((value) => {
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
};

export default GifAreaF;
