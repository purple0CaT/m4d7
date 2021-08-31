import { Spinner } from "react-bootstrap";
import React from "react";
import AddComent from "./addComent";
import Comments from "./Comments";

class CommentArea extends React.Component {
  state = {
    comments: [],
    asin: this.props.asin,
    loading: false,
  };
  // On load
  componentDidMount() {
    this.loadComments();
  }
  //   Refresh
  componentDidUpdate(prev, prevState) {
    prev.asin !== this.props.asin && this.loadComments();
  }
  // FETCH COMMENTS
  loadComments = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
          },
        }
      );
      const data = await response.json();
      this.setState({ comments: data, loading: false });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner animation="grow" variant="warning" className='mx-auto'/>
        ) : (
          Object.values(this.state.comments).map((comm) => {
            return (
              <Comments
                _id={comm._id}
                author={comm.author}
                comment={comm.comment}
                rate={comm.rate}
                asin={comm.elementId}
                loadComments = {this.loadComments}
              />
            );
          })
        )}
        <hr />
        <AddComent loadComments = {this.loadComments} asin={this.state.asin} />
      </>
    );
  }
}

export default CommentArea;
