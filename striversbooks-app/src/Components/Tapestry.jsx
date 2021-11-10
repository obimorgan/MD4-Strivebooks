/** @format */

import Card from "react-bootstrap/Card";
import { Container, Row, Col,} from "react-bootstrap";
import {Component} from "react"
import items from "../Data/scify.json";



class Tapestry extends Component {
    state = {
        selectedBook : null
    }
    render() {
        return(
            <Container>
                <Row>
                   
                    <Col className="d-flex flex-wrap">
                        {items.map((item) => (
                        <Card style={{ width: "12rem",}}
                        className="col-xs-3 col-sm-4 col-md-3 px-n1"
                        key={item.id}
                        >
                            <Card.Img
                            variant="top"
                            src={item.img}
                            className="img-fluid"

                            onClick={() => this.setState( 
                                {
                                    selectedBook: item
                                    
                                }
                            )}

                            />
                            {/* <Card.Body> */}
                            {/* <Card.Title> */}
                                {/* {item.title} */}
                            {/* </Card.Title> */}
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go somewhere</Button> */}
                            {/* </Card.Body> */}
                        </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
        
    }
}

// const Tapestry = (props) => (
//   <Container>
//     <h1>Latest Release</h1>
//     <Row>
//       <Col className="d-flex flex-wrap">
//         {items.map((item) => (
//           <Card
//             style={{ width: "10rem", height: "15rem"}}
//             className="px-n1"
//             key={item.asin}
//           >
//             <Card.Img variant="top" src={item.img} className="img-fluid" />
//             {/* <Card.Body> */}
//               {/* <Card.Title className="mx-n3 my-n2">{item.title}</Card.Title> */}
//               {/* <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text> */}
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             {/* </Card.Body> */}
//           </Card>
//         ))}
//       </Col>
//     </Row>
//   </Container>
// );
export default Tapestry;
