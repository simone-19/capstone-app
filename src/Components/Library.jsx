import { useEffect, useState } from "react";
import OneBook from "./OneBook";
import { Col, Form, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";

const Library = () => {
  const token = localStorage.getItem("authToken");
  const [searchQuery, setSearchQuery] = useState("");
  const [book, setBook] = useState();
  const hendle = (e) => {
    setSearchQuery(e.target.value);
  };
  const getLibrary = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/comics`, {
      method: "GET",
      headers: {
        Authorization: ` Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
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
    getLibrary();
  }, [token]);
  return (
    <>
      <MyNavBar></MyNavBar>
      <Row className="g-5 mt-3 justify-content-center">
        {book?.map((b) => (
          <OneBook book={b} key={b.id} />
        ))}
      </Row>
      <MyFooter></MyFooter>
    </>
  );
};

export default Library;
