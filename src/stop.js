import { Component } from "react";

class Stop extends Component {
    render () {
        return (
            <button onClick={this.props.stopGame}>Stop</button>
        )
    }
}

export default Stop;