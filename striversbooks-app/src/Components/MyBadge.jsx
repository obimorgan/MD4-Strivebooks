import { Component } from "react";
import Badge from 'react-bootstrap/Badge'

class MyBadge extends Component {
    render(){
        return(
            <Badge pill variant="success">
                "Offer"
            </Badge>
        )
    }
}

export default MyBadge