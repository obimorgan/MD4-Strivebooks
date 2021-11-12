/** @format */

import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentsList = ({ displayComments }) => (
    <ListGroup.Item>
        {displayComments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
        ))}
    </ListGroup.Item>
);

export default CommentsList;
