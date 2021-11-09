/** @format */
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'react-bootstrap'


const Welcome = (props) => (
  <Jumbotron fluid>
    <Container>
      <h1>Strive Books</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </Container>
  </Jumbotron>
);

export default Welcome;
