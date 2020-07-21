import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { getApi } from "../api/getApi";
import Navbar from "./Navbar";

const GifAreaF = (props) => {
  const [gifUrls, setGifUrls] = useState([]);
  const [errorUrls, setErrorUrls] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [qty, setqty] = useState(12);
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
    async function fetchData() {
      const data = await getApi(props.search, 1, qty);
      if (data.error === "") {
        setGifUrls(data.arrayUrls);
        setPage(1);
        setTotalPage(data.pages);
        setTotalResults(data.totalGifs);
      } else {
        setErrorUrls(data.error);
      }
    }
    fetchData();
  }, [props.search, qty]);

  useEffect(() => {
    async function fetchData() {
      const data = await getApi(props.search, page, qty);
      if (data.error === "") {
        setGifUrls(data.arrayUrls);
        setTotalPage(data.pages);
      } else {
        setErrorUrls(data.error);
      }
    }
    fetchData();
  }, [page]);

  function HandleOnClickPage(option) {
    if (option === ">") setPage(page + 1);
    if (option === "<<") setPage(1);
    if (option === ">>") setPage(totalPage);
    if (option === "<") setPage(page - 1);
  }

  function HandleOnChangeQty(event) {
    setqty(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <Container>
        <Row>
          {gifUrls ? (
            <Navbar
              page={page}
              totalPage={totalPage}
              onClick={HandleOnClickPage}
              total={totalResults}
              qty={qty}
              onChange={HandleOnChangeQty}
            />
          ) : (
            <></>
          )}
        </Row>
        <Row>
          {/* {page === 1 ? (
            <>
              <ButtonPage action="firstPage" value="<<" disabled="true" />
              <ButtonPage action="prevPage" value="<" disabled="true" />
            </>
          ) : (
            <>
              <ButtonPage
                action="firstPage"
                value="<<"
                onClick={HandleOnClickPage}
              />
              <ButtonPage
                action="prevPage"
                value="<"
                onClick={HandleOnClickPage}
              />
            </>
          )}
          {page !== totalPage ? (
            <>
              <ButtonPage
                action="nextPage"
                value=">"
                onClick={HandleOnClickPage}
              />
              <ButtonPage
                action="lastPage"
                value=">>"
                onClick={HandleOnClickPage}
              />
            </>
          ) : (
            <>
              <ButtonPage action="nextPage" value=">" disabled="true" />
              <ButtonPage action="lastPage" value=">>" disabled="true" />
            </>
          )} */}
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
          ) : errorUrls ? (
            <p>Hay error</p>
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
