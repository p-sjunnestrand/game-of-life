import {Component} from 'react';

class InfoBtn extends Component{
    render () {
        return (
            <button id="infoBtn" onClick={this.props.onClick}>Info</button>
        )
    }
}

export default InfoBtn;