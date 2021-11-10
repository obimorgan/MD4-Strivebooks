import Card from 'react-bootstrap/Card'
// import bookArr from '../Data/scify.json'

const SingleBook = ({ bookObj }) => {
    // bookObj = bookArr[0]

    return (
        <Card className="book-cover">
            <Card.Img variant="top" src={bookObj.img} />
            <Card.Body>
                <Card.Title>{bookObj.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SingleBook