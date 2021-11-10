import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
const SearchBar = () => (
    <Form className="mt-3 mb-3">
        <FormControl type="text" placeholder="Search" className="m  r-sm-2 mb-2" />
        <Button variant="outline-success">Search</Button>
    </Form>
)

export default SearchBar