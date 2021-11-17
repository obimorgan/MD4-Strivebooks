import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = (props) => {

    const location = useLocation()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
            <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link>
                        <div className={'nav-link' 
                        + (location.pathname === 'about' ?
                        'active' : '')}>{props.aboutlink}</div>
                    </Link>
                    <Link>
                        <div className={'nav-link' 
                        + (location.pathname === 'book-details' ?
                        ' active' : '')}>{props.bookdetailslink}</div>
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar