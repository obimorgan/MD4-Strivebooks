import {Component} from 'react'
import Form from 'react-bootstrap/Form'

class AddComments extends Component {
    postComments = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
                method: "POST",
                headers: {
                    "Authorization":
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
                  },
                body: JSON.stringify({

                }) 
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export default AddComments