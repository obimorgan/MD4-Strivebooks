import {Component} from 'react'
import Form from "react-bootstrap/Form";

class AddComments extends Component {
    state = {
        comment: {
            comment: " ",
            rate: 1,
            elementId: this.props.asin,
            author: " "

        }
    }
    render () {
        return (
            <Form>
                <div>Add Comments</div>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Your name"
                        value={this.state.comment.author}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                author: e.target.value
                            }
                        })}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control 
                    as="select"
                    value={this.state.comment.rate}
                    onChange={e => this.setState({
                        comment: {
                            ...this.state.comment,
                            rate: e.target.value
                        }
                    })}
                    >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Place your comment here.</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={this.state.comment.comment}
                    onChange={e => this.setState({
                        comment: {
                            ...this.state.comment,
                            comment: e.target.value
                        }
                    })}
                    />
                </Form.Group>
            </Form>
        )
    }
}
export default AddComments