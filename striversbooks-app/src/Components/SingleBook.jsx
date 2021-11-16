/** @format */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SingleBook = ({changeSelectedBook, selected, bookInfo}) => {
        return (
            <Col  className="col-md-3" >
                <Card
                onClick={() => changeSelectedBook(bookInfo.asin)}
                
                style={{ boxShadow: selected === bookInfo.asin ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px" : "none"}}
                >

                {/* {
                    state.selected && <MyBadge />
                } */}
                    <Card.Img variant="top" src={bookInfo.img} 
                    
                    />
                    <Card.Body>
                        <Card.Text>{bookInfo.title}</Card.Text>
                        <Card.Text>
                        {bookInfo.category} - ${bookInfo.price} 
                        </Card.Text>
                    </Card.Body>
                </Card>
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
