/** @format */

import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
import Alert from 'react-bootstrap/Alert'


const CommentsList = ({displayComments}) => (
    // <ListGroup.Item>
    //     {
    //         displayComments.map((comment) => (
    //         <SingleComment key={comment._id} comment={comment} />
    //     ))
    //     }
    // </ListGroup.Item>
    <>
        <h5>Click on the book to see comments bellow.</h5>
        <Alert variant={"success"}>
            comments should be mapped() here
        </Alert>
        {
            displayComments.map((comment) => (
                <ListGroup.Item key={comment._id} >
                    <SingleComment comment={comment} />
                </ListGroup.Item>
            ))

        }

    </>

);

export default CommentsList;
