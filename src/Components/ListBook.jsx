import { Component, useState } from "react";
import OneBook from "./OneBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const ListBook = () => {
  // const [state, setState] = useState;
  // searchQuery: "",
  // selectedBook: null,

  // changeSelectedBook = (asin) => {
  //   this.setState({
  //     selectedBook: asin,
  //   });
  // };

  return (
    <>
      <MyNavBar></MyNavBar>
      {/* <Row className="justify-content-center">
          <Col md={8}>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={3} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-5 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={3} key={b.asin}>
                    <OneBook
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
           <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col> 
         </Row> */}
      <MyFooter></MyFooter>
    </>
  );
};

export default ListBook;
