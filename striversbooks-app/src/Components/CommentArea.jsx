/** @format */

import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          Method: Get,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data });
      } else {
        alert("Could not fetch comments");
      }
    } catch (error) {}
  };
  render() {
    <>
      {this.props.comments.map(comment => <CommentsList comment={comment}/>)}
    </>;
  }
}

export default CommentArea;
