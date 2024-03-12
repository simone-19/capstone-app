import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../Data/fantasy.json";

const AllBooks = () => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={3} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllBooks;
