/** @format */
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import MyBadge from "./MyBadge";
import CommentArea from "./CommentArea";
import AddComments from "./AddComments";
import Form from "react-bootstrap/Form"

class SingleBook extends Component {
    state = {
        selected: false,
    }
    render() {
        return (
            <Col  className="col-md-3" >
                <Card
                key={this.props.bookInfo.asin}
                onClick={(e) => this.setState({ selected: !this.state.selected})}
                style={{ boxShadow: this.state.selected ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px" : "none"}}
                >
                {
                    this.state.selected && <MyBadge />
                }
                <Card.Img variant="top" src={this.props.bookInfo.img} 
                
                />
                <Card.Body>
                    <Card.Text>{this.props.bookInfo.title}</Card.Text>
                    <Card.Text>
                    {this.props.bookInfo.category} - ${this.props.bookInfo.price} 
                    </Card.Text>
                </Card.Body>
                {
                    this.state.selected && <CommentArea id={this.props.bookInfo.asin}/>
                }
                {
                    this.state.selected && 
                    <Form.Group>
                        <Form.Control type="text" placeholder="Add a comment" />
                    </Form.Group>
                }
                </Card>
            </Col>
        )

    }
}

export default SingleBook
