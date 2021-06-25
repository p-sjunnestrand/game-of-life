import { Component } from "react";

class Cell extends Component {

    handleClick = (e) => {
        //Takes clicked cell's id, splits it and assigns parts to two vars: one for array index and one for cell index. To be used when setting state.
        const idArray = e.target.id.split('+');
        const arrayId = idArray[0];
        const cellId = idArray[1];
        this.props.selectCell(arrayId, cellId);
    }
    render () {
        return (
            <div id={this.props.id} className={this.props.className} onClick={this.handleClick}></div>
        )
    }
}

export default Cell;