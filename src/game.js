import {Component} from 'react';
import Cell from './cell';

class Game extends Component {

    //Handles click on cell. Uses parameters to find correct array and cell. Changes to 1 if 0 and vice versa, then updates state.
    selectCell = (array, cell) => {
        let updatedState = this.props.cells.map(innerArray => innerArray.slice());
        if(updatedState[array][cell] === 0) {
            updatedState[array][cell] = 1;
        } else {
            updatedState[array][cell] = 0;
        }
        this.props.updateBoardState(updatedState)
    }

    render() {
        return(
            <section id="gameSection">
                <div id="gameBoard">
                    {/* Two nested loops through state which renders one cell per item i state, i.e. 50*25 cells. */}
                    {this.props.cells.map((array, i) => 
                        array.map((cell, index) =>
                        <Cell key={`${i}${index}`} className={cell === 1 ? "livingCell" : "deadCell"} id={`${i}+${index}`} cell={cell} arrayIndex={i} cellIndex={index} selectCell={this.selectCell}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default Game;