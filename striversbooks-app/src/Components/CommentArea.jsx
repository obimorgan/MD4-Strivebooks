/** @format */

import { Component } from "react";

import CommentsList from "./CommentsList";
import AddComments from "./AddComments";
import Loader from "./Loader";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/commens/" +
            this.props.asin,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.setState({ comments: data, isLoading: false})
        } else {
          console.log('error')
          this.setState({isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        
      }
    }
  };
  render() {
    return (
      <div>
        <CommentsList displayComments={this.state.comments} />
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Error />}
        <AddComments asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
