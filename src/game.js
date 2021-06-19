import {Component} from 'react';
import Cell from './cell';
import Start from './start';

class Game extends Component {

    constructor(props) {
        super(props);
        //State is comprised of 50 arrays each containing 25 items. Each item corresponds to cell on gameboard.
        this.state = {
            cells: Array(50).fill().map(() => Array(25).fill(0)),
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    //Handles click on cell. Uses parameters to find correct array and cell. Changes to 1 if 0 and vice versa, then updates state.
    selectCell = (array, cell) => {
        let updatedState = [...this.state.cells];

        if(updatedState[array][cell] === 0) {
            updatedState[array][cell] = 1;
        } else {
            updatedState[array][cell] = 0;
        }
        // console.log(updatedState);
        this.setState({cells: updatedState})
        // console.log(this.state.cells);
    }

    render() {
        return(
            <section>
                <h1>Game</h1>
                <Start />
                <div id="gameBoard">
                    {/* Two nested loops through state which renders one cell per item i state, i.e. 50*25 cells. */}
                    {this.state.cells.map((array, i) => 
                        array.map((cell, index) =>
                        <Cell key={`${i}${index}`} className={"cell"} id={`${i}+${index}`} cell={cell} arrayIndex={i} cellIndex={index} selectCell={this.selectCell}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default Game;