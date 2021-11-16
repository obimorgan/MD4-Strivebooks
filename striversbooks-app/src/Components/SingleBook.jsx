/** @format */
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import {useState} from 'react'

const SingleBook = (props) => {


        return (
            <Col  className="col-md-3" >
                <Card
                onClick={() => props.changeSelectedBook(props.bookInfo.asin)}
      
                style={{ boxShadow: props.selected === props.bookInfo.asin ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px" : "none"}}
                >
                {/* {
                    state.selected && <MyBadge />
                } */}
                <Card.Img variant="top" src={props.bookInfo.img} 
                
                />
                <Card.Body>
                    <Card.Text>{props.bookInfo.title}</Card.Text>
                    <Card.Text>
                    {props.bookInfo.category} - ${props.bookInfo.price} 
                    </Card.Text>
                </Card.Body>

                </Card>
                {/* {
                    <Form.Group>
                        {this.state.selected && <CommentArea id={this.props.bookInfo.asin}/>
                }  </Form.Group>
                } */}
            </Col>
        )


}

// class SingleBook extends Component {

//     render() {
//         return (
//             <Col  className="col-md-3" >
//                 <Card
//                 onClick={() => this.props.changeSelectedBook(this.props.bookInfo.asin)}
      
//                 style={{ boxShadow: this.props.selected === this.props.bookInfo.asin ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px" : "none"}}
//                 >
//                 {/* {
//                     this.state.selected && <MyBadge />
//                 } */}
//                 <Card.Img variant="top" src={this.props.bookInfo.img} 
                
//                 />
//                 <Card.Body>
//                     <Card.Text>{this.props.bookInfo.title}</Card.Text>
//                     <Card.Text>
//                     {this.props.bookInfo.category} - ${this.props.bookInfo.price} 
//                     </Card.Text>
//                 </Card.Body>

//                 </Card>
//                 {/* {
//                     <Form.Group>
//                         {this.state.selected && <CommentArea id={this.props.bookInfo.asin}/>
//                 }  </Form.Group>
//                 } */}
//             </Col>
//         )

//     }
// }

export default SingleBook
