import { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Form, Button, Col } from 'react-bootstrap'

class Registration extends Component {
    state = {
        registration: {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        showComplete: false
    }

    handleInput = (key, value) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [key]: value
            }
        })
    }
    isButtonClickable = () => {
        let isClickable = false
        if (this.state.registration.name.length >= 2) {
            isClickable = true
        }
        return isClickable
    }

    render() {
        return (

            <Container>
                <Form className="mt-5">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"
                            onChange={(e) => this.handleInput('name', e.target.value)}
                            value={this.state.registration.name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Surname"
                            onChange={(e) => this.handleInput('surname', e.target.value)}
                            value={this.state.registration.surname} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => this.handleInput('email', e.target.value)}
                            value={this.state.registration.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter First Password"
                            onChange={(e) => this.handleInput('password', e.target.value)}
                            value={this.state.registration.password} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={(e) => this.handleInput('confirmpassword', e.target.value)}
                            value={this.state.registration.confirmpassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!this.isButtonClickable()}>
                        Submit
                     </Button>
                </Form>
            </Container>
        )
    }
}

export default Registration