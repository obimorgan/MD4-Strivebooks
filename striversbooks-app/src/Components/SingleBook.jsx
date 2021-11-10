/** @format */
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

class SingleBook extends Component {
  render() {
      return (
        <div>
         <Card className="book-cover d-flex">
          <Card.Img variant="top" src={this.props.bookInfo.img} />
          <Card.Body>
            <Card.Title>{this.props.bookInfo.title}</Card.Title>
            <Card.Text>
              {this.props.bookInfo.category}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      )

  }
}

export default SingleBook
