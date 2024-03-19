import { Card, CardTitle, Col } from "react-bootstrap";
import AddCart from "./AddCart";

const OneBook = ({ book }) => {
  return (
    <>
      <Col xs={12} md={4}>
        <Card id="cardBook">
          <Card.Img id="cardImg" variant="top" src={book.immagine} />
          <Card.Body className="d-flex-column justify-content-center">
            <Card.Title className="cardInterna d-flex justify-content-center">
              {book.titolo}
            </Card.Title>
            <Card.Title className="cardInterna d-flex justify-content-center">
              {book.prezzo}$
            </Card.Title>

            <AddCart book={book} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default OneBook;
