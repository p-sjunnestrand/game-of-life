import { Component } from "react";

class Start extends Component {

    handleClick() {
        // this.props.startGame();
        console.log('start!');
    }
    render () {
        return(
            <button onClick={this.handleClick}>Start</button>
        )
    }
}

export default Start;