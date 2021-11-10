/** @format */
import React, { Component} from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ModalInfo extends Component {
  render() {
    return (
      <Modal.Dialog>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.item.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.item.category}</p>
          <p>{this.props.item.price}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal.Dialog>
    )
  }
}


export default ModalInfo;
