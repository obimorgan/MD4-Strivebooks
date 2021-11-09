/** @format */

import Card from "react-bootstrap/Card";
import { Container, Button, Row, Col } from "react-bootstrap";
import items from "../Data/scify.json";

const Tapestry = (props) => (
  <Container>
    <Row>
      <Col className="d-flex flex-wrap">
        {items.map((item) => (
          <Card style={{ width: "12rem" }}
          className="col-xs-3 col-sm-4 col-md-3"
          >
            <Card.Img
              variant="top"
              src={item.img}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>

  //   <Row xs={2} sm={3} md={4} className="g-4">
  //     {Array.from({ length: 4 }).map((_, idx) => (
  //       <Col className="">
  //         {items.map((item) => (
  //           <Card>
  //             <Card.Img variant="top" src={item.img} />
  //             <Card.Body>
  //               <Card.Title>{item.title}</Card.Title>
  //               <Card.Text></Card.Text>
  //             </Card.Body>
  //           </Card>
  //         ))}
  //       </Col>
  //     ))}
  //   </Row>
);
export default Tapestry;
