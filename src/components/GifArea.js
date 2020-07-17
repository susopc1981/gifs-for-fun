import React from "react";
import { Container, Row, Col } from 'reactstrap';


class GifArea extends React.Component {
    constructor(props) {
      super(props);
    }

//Ruta: data<index<images<original<url

async componentDidMount(){
    const result = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=LlMFRKH1LFUFQwmF51v05p3dm9TFYUf0");
    const resultJson = await result.json();
    console.log(resultJson)
}

  
    render() {
      return (
        <div>
            <Container>
                <Row>
                    <Col xs="3">
                        <img src="https://media0.giphy.com/media/KDzm0erxGj9DjOLIg0/giphy.gif?cid=78e2744e2d4132959b2ee9e6a7f5dd2c7b71bed454fa9971&rid=giphy.gif"></img>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
  }
  export default GifArea;