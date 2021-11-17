import {Card, Button}from "react-bootstrap";

const BookDetails = ({bookInfo}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookInfo.img} />
        <Card.Body>
          <Card.Title>{bookInfo.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}


export default BookDetails