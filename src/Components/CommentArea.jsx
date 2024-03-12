import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { Row, Col } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhYWMwYmY2ZTNkZDAwMTQ5NWU1ZjciLCJpYXQiOjE2OTg5MzM3MTcsImV4cCI6MTcwMDE0MzMxN30.b1wqPx7IgOw_g90A55Y9zs7BcrQwyq_nqSlFx1DB5uA",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
      <Row>
        <Col md={4}>
          <CommentArea asin={this.state.selectedBook} />

          <div className="text-center">
            {this.state.isLoading && <Loading />}
            {this.state.isError && <Error />}
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default CommentArea;
