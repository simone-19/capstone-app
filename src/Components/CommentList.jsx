import { ListGroup } from "react-bootstrap";
import OneComment from "./OneComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <OneComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
