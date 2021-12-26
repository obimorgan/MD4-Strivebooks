/** @format */

import ListGroup from "react-bootstrap/ListGroup";
// import { Button } from "react-bootstrap";
// import { useEffect } from "react";

const CommentsList = ({ review }) => {
    console.log(review)
    // useEffect(() => {
    //     deleteComment()
    // }, [])
    // const deleteComment = async (id) => {
    //     try {
    //         let response = await fetch(`https://hw-m6d5.herokuapp.com/reviews/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //         })
    //         if (response.ok) {
    //             alert('Comment succesfully deleted')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <>
            <ListGroup.Item className="flex-column">
                <div >
                    {review.text}
                </div>
                <div className="d-flex justify-content-between">
                    {/* <div>
                        <Button variant="danger"
                            onClick={() => deleteComment}>Delete</Button>
                    </div> */}
                </div>
            </ListGroup.Item>
        </>
    )
}

export default CommentsList;
