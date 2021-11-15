/** @format */

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Component } from "react";
import items from "../Data/scify.json";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    selected: null,
    books: items,
    search: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search Books"
                  value={this.state.search}
                  onChange={(e) =>
                    this.setState({ search: e.currentTarget.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              {this.state.books
                .slice(0, 20)
                .filter(
                  (b) =>
                    b.title.toLowerCase().indexOf(this.state.search) !==
                      -1 ||
                    b.category.toLowerCase().indexOf(this.state.search) !==
                      -1
                )
                .map((b) => (
        
                        <SingleBook 
                        key={b.asin} 
                        bookInfo={b} 
                        selected={this.state.selected} 
                        changeSelectedBook={asin => this.setState({
                        selected: asin
                        })}/>
              
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selected}/>
          </Col>
        </Row>
      </Container>
    );
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
