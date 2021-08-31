import React from "react";
import { Spinner } from "react-bootstrap";
import {AiFillCloseCircle} from 'react-icons/ai'

class Comments extends React.Component {
  state = {
    id: this.props._id,
    loadDel: false,
  };

  deleteCom = async (e) => {
    this.succDelete();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
          },
        }
      );
      if (response.ok) {
        setTimeout(this.succDelete);
        this.reloadCom()
      }
    } catch (e) {
      console.error(e);
      this.reloadCom()
    }
  };
  succDelete = () => {
    this.setState({ loadDel: !this.state.loadDel });
  };
  reloadCom = (e) => {
    this.props.loadComments();
  };
  render() {
    return (
      <>
        {
          <div
            key={this.props._id + this.props.rate}
            className="d-flex flex-column comment-bg mb-1 position-relative del-hover"
          >
            <small>Asin: {this.props.asin}</small>
            <small className="font-weight-bold">{this.props.author}</small>
            <small>{this.props.comment}</small>
            <small className="font-weight-bold">
              Rate: {Array.from({ length: this.props.rate }).map((x) => "⭐️")}
            </small>
            {this.state.loadDel && (
              <Spinner animation="border" variant="danger" className="mx-auto text-center"/>
            )}
            <a className="delete" onClick={this.deleteCom}>
              {" "}
              <AiFillCloseCircle />{" "}
            </a>
          </div>
        }
      </>
    );
  }
}

export default Comments;
