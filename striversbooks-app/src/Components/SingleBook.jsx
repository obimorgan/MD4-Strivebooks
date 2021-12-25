/** @format */
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import {Col, Button }from "react-bootstrap";
// import MyBadge from "./MyBadge";
// import Form from "react-bootstrap/Form"

class SingleBook extends Component {
    // state = {
    //     selected: false,
    // }

    // handleAddToCart = async () => {
    //     try {
    //         const response = await fetch(`https://hw-m6d5.herokuapp.com/shoppingcart/${productId}/${userId}`, {
    //             method: POST,
    //             body: JSON.stringify({})
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    

    render() {
        return (
            <Col  className="col-md-3" >
                <Card
                onClick={() => this.props.changeSelectedBook(this.props.product.id)}
      
                style={{ boxShadow: this.props.selected === this.props.product.id ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px" : "none"}}
                >
                {/* {
                    this.state.selected && <MyBadge />
                } */}
                <Card.Img variant="top" src={this.props.product.image_url} 
                
                />
                <Card.Body>
                    <Card.Text>{this.props.product.product_name}</Card.Text>
                    <Card.Text>
                    {this.props.product.categories[0].name} - ${this.props.product.price} 
                    </Card.Text>
                    {/* <Button variant="success"
                        onClick={() => handleAddToCart()}>
                        Add to cart</Button> */}
                </Card.Body>

                </Card>
                {/* {
                    <Form.Group>
                        {this.state.selected && <CommentArea id={this.props.product.id}/>
                }  </Form.Group>
                } */}
            </Col>
        )

    }
}

export default SingleBook
