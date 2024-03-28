import { Card, CardTitle, Col } from "react-bootstrap";
import AddCart from "./AddCart";
import DeleteCart from "./DeleteCart";

const OneBook = ({ book }) => {
  return (
    <>
      <Col id="cardBook" xs={12} md={4}>
        <Card>
          <Card.Img id="cardImg" variant="top" src={book.immagine} />
          <Card.Body className="d-flex-column justify-content-center">
            <Card.Title className="cardInterna d-flex justify-content-center">
              {book.titolo}
            </Card.Title>
            <Card.Title className="cardInterna d-flex justify-content-center">
              {book.prezzo}€
            </Card.Title>

            <div className="d-flex justify-content-end align-items-center">
              <span className="d-flex me-1">Add</span>
              <span id="addInCart" className="d-flex">
                <AddCart book={book} />
              </span>
            </div>

            {/* <DeleteCart book={book} /> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default OneBook;
