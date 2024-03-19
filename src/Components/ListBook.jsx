import { useEffect, useState } from "react";
import OneBook from "./OneBook";
import { Col, Form, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const ListBook = () => {
  const token = localStorage.getItem("authToken");
  const [searchQuery, setSearchQuery] = useState("");
  const [book, setBook] = useState();
  const hendle = (e) => {
    setSearchQuery(e.target.value);
  };
  const search = (searchQuery) => {
    const uppercaseSearchQuery = searchQuery.toUpperCase();
    fetch(
      `${process.env.REACT_APP_BACKEND}/comics/search?title=${uppercaseSearchQuery}`,
      {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        setBook(data);
        console.log(data);
      })

      .catch((err) => console.log("ERRORE!", err));
  };
  useEffect(() => {
    if (searchQuery.length >= 1) {
      search(searchQuery);
    } else {
      setBook([]);
    }
  }, [searchQuery]);

  return (
    <>
      <MyNavBar></MyNavBar>
      <Row className="justify-content-center">
        <Col>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={3} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={searchQuery}
                  onChange={(e) => {
                    hendle(e);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-5 mt-3">
            {book?.map((b) => (
              <OneBook book={b} key={b.id} />
            ))}
          </Row>
        </Col>
      </Row>
      <MyFooter></MyFooter>
    </>
  );
};

export default ListBook;
