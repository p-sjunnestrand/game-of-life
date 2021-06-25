import { Component } from "react";

class Reset extends Component {
    render () {
        return(
            <button onClick={this.props.onClick}>Reset</button>
        )
    }
}

export default Reset;