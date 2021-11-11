import ListGroup from 'react-bootstrap/ListGroup'
import SingleComment from './SingleComment'

const CommentsList = ({displayComments}) => (
    <>
        {

            displayComments.map(comment => (
                <ListGroup.Item >
                    <SingleComment key={comment._id} comment={comment}/>
                </ListGroup.Item>
            ))

        }
    </>

)

export default CommentsList