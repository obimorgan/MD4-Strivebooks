/** @format */

import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

class AddComments extends Component {
  state = {
    comment: {
      comment: " ",
      rate: 1,
      elementId: this.props.asin,
      author: " ",
    },
  };
  postComments = async (e) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
          },
        }
      );
      if (response.ok) {
        alert("comments posted");
      } else {
        throw response;
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
        <div>
            <Form onSubmit={this.postComment}>
                <div>Add Comments</div>
                <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your name"
                    value={this.state.comment.author}
                    onChange={(e) =>
                    this.setState({
                        comment: {
                        ...this.state.comment,
                        author: e.target.value,
                        },
                    })
                    }
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    as="select"
                    value={this.state.comment.rate}
                    onChange={(e) =>
                    this.setState({
                        comment: {
                        ...this.state.comment,
                        rate: e.target.value,
                        },
                    })
                    }
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>Place your comment here.</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={this.state.comment.comment}
                    onChange={(e) =>
                    this.setState({
                        comment: {
                        ...this.state.comment,
                        comment: e.target.value,
                        },
                    })
                    }
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
      
    );
  }
}
export default AddComments;
