import {ListGroup, Button} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

const deleteComment = async (asin) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
              },
        })
        if(response.ok) {
            alert('Comment succesfully deleted')
        }
    } catch (error) {
        console.log(error)
    }
}

const SingleComment = ({comment}) => (
    <>
        
        <ListGroup.Item className="flex-column">
        <Alert variant={"success"}>
            comments should be showned here here
        </Alert>
            <div>
                Comments: {comment.comment}
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    Rated: {comment.rate}    
                </div>
                <div>
                    <Button variant="danger"
                    onClick={() => deleteComment(comment._id)}>Delete</Button>
                </div>
            </div>
        </ListGroup.Item>
    </>    
)

export default SingleComment