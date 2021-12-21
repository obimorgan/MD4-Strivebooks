/** @format */

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Component } from "react";

import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

// const url = "https://hw-m6d5.herokuapp.com/products"

class BookList extends Component {
  state = {
    selected: null,
    products: [],
    search: "",
  };

  componentDidMount = async () => {
    try {
      console.log("get")
      const response = await fetch("https://hw-m6d5.herokuapp.com/products/")
      if(response.ok){
        const data = await response.json()
        this.setState({ products: data })
      }else {
        console.log(console.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
            
                <Form.Control className="mb-3"
                  type="text"
                  placeholder="Search Product"
                  value={this.state.search}
                  onChange={(e) =>
                    this.setState({ search: e.currentTarget.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              {this.state.products
                .filter(
                  (product) =>
                    product.product_name.toLowerCase().indexOf(this.state.search) !==
                      -1 ||
                    product.categories[0].name.toLowerCase().indexOf(this.state.search) !==
                      -1
                )
                .map((product) => (
        
                        <SingleBook 
                        key={product.id} 
                        product={product} 
                        selected={this.state.selected} 
                        changeSelectedBook={id => this.setState({
                        selected: id
                        })}/>
              
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea id={this.state.selected}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
