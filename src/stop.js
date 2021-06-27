import { Component } from "react";

class Stop extends Component {
    render () {
        return (
            <button onClick={this.props.onClick} className="stopBtn">Stop</button>
        )
    }
}

export default Stop;