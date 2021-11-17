/** @format */

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react"


const BookList = ({books}) => {
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState("")

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
            
              <Form.Control className="mb-3"
                type="text"
                placeholder="Search Books"
                value={search}
                onChange={(e) =>
                  setSearch(e.currentTarget.value)
                }
              />
            </Col>
          </Row>
          <Row>
            {books
              // .slice(0, 20)
              .filter(
                (b) =>
                  b.title.toLowerCase().indexOf(search) !==
                  -1 ||
                  b.category.toLowerCase().indexOf(search) !==
                  -1
              )
              .map((b) => (

                <SingleBook
                  key={b.asin}
                  bookInfo={b}
                  selected={selected}
                  changeSelectedBook={asin => setSelected(asin)} />
              ))}
          </Row>
        </Col>
        <Col md={4}>
         <CommentArea asin={selected}/>

        </Col>
      </Row>
    </Container>
  );
}


// class BookList extends Component {
//   state = {
//     selected: null,
//     books: items,
//     search: "",
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col md={8}>
//             <Row>
//               <Col>

//                 <Form.Control className="mb-3"
//                   type="text"
//                   placeholder="Search Books"
//                   value={this.state.search}
//                   onChange={(e) =>
//                     this.setState({ search: e.currentTarget.value })
//                   }
//                 />
//               </Col>
//             </Row>
//             <Row>
//               {this.state.books
//                 .slice(0, 20)
//                 .filter(
//                   (b) =>
//                     b.title.toLowerCase().indexOf(this.state.search) !==
//                       -1 ||
//                     b.category.toLowerCase().indexOf(this.state.search) !==
//                       -1
//                 )
//                 .map((b) => (

//                         <SingleBook 
//                         key={b.asin} 
//                         bookInfo={b} 
//                         selected={this.state.selected} 
//                         changeSelectedBook={asin => this.setState({
//                         selected: asin
//                         })}/>

//                 ))}
//             </Row>
//           </Col>
//           <Col md={4}>
//             <CommentArea asin={this.state.selected}/>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }


export default BookList;
