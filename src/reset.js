import { Component } from "react";

class Reset extends Component {
    render () {
        return(
            <button onClick={this.props.reset}>Reset</button>
        )
    }
}

export default Reset;