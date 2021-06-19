import { Component } from "react";

class Cell extends Component {

    handleClick = (e) => {
        //Takes clicked cell's id, splits it and assigns parts to two vars: one for array index and one for cell index. To be used when setting state.
        // console.log(e.target.id);
        const idArray = e.target.id.split('+');
        // console.log(idArray);
        const arrayId = idArray[0];
        const cellId = idArray[1];
        // console.log('arrayId', arrayId, 'cellId', cellId);
        this.props.selectCell(arrayId, cellId);
    }
    render () {
        return (
            <div id={this.props.id} className={this.props.className} onClick={this.handleClick} style={this.props.cell === 1 ? {backgroundColor: "#4ddbc1"}:{backgroundColor: "black"}}></div>
        )
    }
}

export default Cell;