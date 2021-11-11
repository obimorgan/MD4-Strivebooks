/** @format */

import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: []
  };

  componentDidMount () {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
            method: "GET",
            headers: {
            "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        this.setState({ comments: data });
      } else {
        throw response
      }
    } catch (error) {
        console.log(error)
    }
  };
  render() {
      return (
        <ListGroup>
        {
        this.state.comments.map(comment => (
          <CommentsList comment={comment}/>
        ))}
        </ListGroup>
      )
  }
}

export default CommentArea;
