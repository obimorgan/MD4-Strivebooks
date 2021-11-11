/** @format */

import { Container, Row,} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {Component} from "react"
import items from "../Data/scify.json";
import SingleBook from "./SingleBook";



class BookList extends Component {
    state = {
      books: items,
      search: ""
    }


    
    render() {
        return(
            <Container>
                <Row>
                <Form.Control 
                    type="text" 
                    placeholder="Search Books" 
                    value={this.state.search}
                    onChange={(e)=> 
                        this.setState({ search: e.currentTarget.value})}
                />   
                </Row>
                <Row>
                    {this.state.books
                    .slice(0,20)
                    .filter(item => item.title.toLowerCase().indexOf(this.state.search) !== -1 
                    || item.category.toLowerCase().indexOf(this.state.search) !== -1)
                    .map(item => (
                        <SingleBook bookInfo={item} />
                    ))}
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
