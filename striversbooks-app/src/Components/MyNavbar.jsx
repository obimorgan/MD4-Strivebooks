import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const MyNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">
                    <div className="nav-link">Home</div>
                </Link>
                <Link to='/about'>
                    <div className="nav-link">About</div>
                </Link>
                <Link to="/registration">
                    <div className="nav-link">Registration</div>
                </Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNavbar