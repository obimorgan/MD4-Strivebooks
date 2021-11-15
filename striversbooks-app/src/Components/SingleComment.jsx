import ListGroup from 'react-bootstrap/ListGroup'
import { Component } from 'react'

const SingleComment = ({comment}) => (
    <>
        <ListGroup.Item>
            Comments:{comment.comment}     
        </ListGroup.Item>
        <ListGroup.Item>
            Rated:{comment.rate}    
        </ListGroup.Item>
    </>

)

export default SingleComment