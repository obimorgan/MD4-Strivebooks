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

        if (this.state.registration.name.length >= 2 &&
            this.state.registration.surname.length >=3 &&
            this.state.registration.password.length >8 &&
            this.state.registration.confirmpassword === 
            this.state.registration.password
            ){
            isClickable = true
        }
        return isClickable
    }

    render() {
        return (

            <Container>
                <div className="mt-5">
                    <h1>Registration Form</h1>
                </div>
                <Form className="mt-2"
                onSubmit={handleRegistration()}
                >
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"
                            onChange={(e) => this.handleInput('name', e.target.value)}
                            value={this.state.registration.name} 
                            required
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Surname"
                            onChange={(e) => this.handleInput('surname', e.target.value)}
                            value={this.state.registration.surname} 
                            required
                            />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => this.handleInput('email', e.target.value)}
                            value={this.state.registration.email} 
                            required
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => this.handleInput('password', e.target.value)}
                            value={this.state.registration.password} 
                            required
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={(e) => this.handleInput('confirmpassword', e.target.value)}
                            value={this.state.registration.confirmpassword} 
                            required  
                            />
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