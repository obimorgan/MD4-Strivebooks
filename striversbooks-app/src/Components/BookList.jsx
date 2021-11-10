/** @format */

import { Container, Row, Col,} from "react-bootstrap";
import {Component} from "react"
import items from "../Data/scify.json";
import SingleBook from "./SingleBook";



class BookList extends Component {
    state = {

        selectedBook : null
    }
    render() {
        return(
            <Container>
                <Row>
                   
                    <Col className="d-flex flex-wrap">
                        {items.map((item) => (
                        <SingleBook bookObj={item} />
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
export default BookList;
