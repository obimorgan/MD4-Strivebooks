import {Component} from  'react'
import ListGroup from 'react-bootstrap/ListGroup'

class  CommentsList extends Component {
    render() {
        return (
            <ListGroup.Item key={this.props.comment.asin}>
                {this.props.comment.rate}
                {this.props.comment.comment}
            </ListGroup.Item>
        )
    }
}

export default CommentsList