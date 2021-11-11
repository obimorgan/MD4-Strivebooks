/** @format */

import { Component } from "react";
import Alert from 'react-bootstrap/Alert'

class MyWarning extends Component {
  render() {
      return (
        <Alert variant={"danger"}>
        Warning
       </Alert>
      )
  }
}

export default MyWarning 