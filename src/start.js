import { Component } from "react";

class Start extends Component {

    render () {
        return(
            <button onClick={this.props.onClick}>Start</button>

        )
    }
}

export default Start;