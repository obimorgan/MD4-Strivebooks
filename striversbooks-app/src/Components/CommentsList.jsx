/** @format */

import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
import Alert from 'react-bootstrap/Alert'


const CommentsList = ({displayComments}) => (
    
    <div>
        {console.log("comment")}
        
        <Alert variant={"success"}>
            Check out some comments below.
        </Alert>
        {
            displayComments.map((comment) => (
                <ListGroup.Item>
                    <SingleComment comment={comment} />
                </ListGroup.Item>
            ))

        }

    </div>

);

export default CommentsList;
