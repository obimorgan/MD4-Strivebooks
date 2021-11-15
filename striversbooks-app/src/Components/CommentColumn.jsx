/** @format */

import { ListGroup, Form } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class CommentColumn extends Component {
  render() {
    return (
      <div className="flex-column">
        <CommentArea />
      </div>
    );
  }
}

export default CommentColumn;
