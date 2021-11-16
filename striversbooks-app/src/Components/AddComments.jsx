/** @format */

import { useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";


const AddComments = ({asin}) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null
  })
  useEffect(() => {
    setComment(c => ({
      ...c,
      elementId: asin
    })) 
    }, [asin])
    
    const postComments = async (e) => {
      e.preventDefault()
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments",
          {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
              "Content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
            },
          }
        );
        if (response.ok) {
          alert("comments posted");
        } else {
          throw response;
        }
      } catch (error) {
        console.log(error);
      }
      postComments()
    }

  return (
      <div>
          <Form onSubmit={postComments}>
              <Form.Group>
              <Form.Label>ADD COMMENTS</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Add Comment Here"
                  value={comment.comment}
                  onChange={e =>
                  setComment({
                    ...comment,
                    comment: e.target.value,
                    
                  })}
                  
              />
              </Form.Group>
              <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                  as="select"
                  value={comment.rate}
                  onChange={e =>
                    setComment({
                      ...comment,
                      rate: e.target.value,
                  })}
              >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
              Submit
              </Button>
          </Form>
      </div>
    )
}

export default AddComments
