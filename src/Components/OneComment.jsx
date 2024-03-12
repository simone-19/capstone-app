import { Button, ListGroup } from "react-bootstrap";

const OneComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhYWMwYmY2ZTNkZDAwMTQ5NWU1ZjciLCJpYXQiOjE2OTg5MzM3MTcsImV4cCI6MTcwMDE0MzMxN30.b1wqPx7IgOw_g90A55Y9zs7BcrQwyq_nqSlFx1DB5uA",
          },
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default OneComment;
