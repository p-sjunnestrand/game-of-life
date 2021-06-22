import {Component} from 'react';
import Cell from './cell';
import Start from './start';

class Game extends Component {

    constructor(props) {
        super(props);
        //State is comprised of 50 arrays each containing 25 items. Each item corresponds to cell on gameboard.
        this.state = {
            cells: Array(25).fill().map(() => Array(50).fill(0)),
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

    startGame = () => {
        // console.log('callback!');
        //Creates two coppies of the 2d grid state: one for reference and the other for update.
        
        // console.log(currentState);
        const tick = setInterval(() => {
            let currentState = this.state.cells.map(innerArray => innerArray.slice());
            let newState = this.state.cells.map(innerArray => innerArray.slice());
            for(let array = 0; array < currentState.length; array++){
                const cells = currentState[array];
                for(let cell = 0; cell < cells.length; cell++){
                    let adjacentCells = 0;
                    // if(updatedState[array-1] && updatedState[cell-1]){
                    //     updatedState[array-1][cell-1].style.backgroundColor = "red";
                    // }


                    if(currentState[array-1] && currentState[cell-1] && currentState[array-1][cell-1] === 1){
                        adjacentCells++;
                    }
                    if(currentState[array-1] && currentState[array-1][cell] === 1){
                        adjacentCells++;
                    }
                    if(currentState[array-1] && currentState[cell+1] && currentState[array-1][cell+1] === 1){
                        adjacentCells++;
                    }
                    if(currentState[cell-1] && currentState[array][cell-1] === 1){
                        adjacentCells++;
                    }
                    if(currentState[cell+1] && currentState[array][cell+1] === 1){
                        adjacentCells++;
                    }
                    if(currentState[array+1] && currentState[cell-1] && currentState[array+1][cell-1] === 1){
                        adjacentCells++;
                    }
                    if(currentState[array+1] && currentState[array+1][cell] === 1){
                        adjacentCells++;
                    }
                    if(currentState[array+1] && currentState[cell+1] && currentState[array+1][cell+1] === 1){
                        adjacentCells++;
                    }
                    // console.log('cell', cell, 'adjacentCells', adjacentCells);
                    if(adjacentCells < 4 && adjacentCells > 1 && newState[array][cell] === 1){
                        continue;
                    } else if(adjacentCells === 3){
                        newState[array][cell] = 1;
                    } 
                    else {
                        newState[array][cell] = 0;
                    }
                    // console.log(adjacentCells);
                    if(adjacentCells === 8 && newState[array][cell] === 1){
                        newState[array][cell] = 3;
                    } 
                }
            }
            // console.log(newState);
            // console.log(currentState);
            // console.log(newState === currentState);
            this.setState({cells: newState});
        }, 200);

    }

    render() {
        return(
            <section>
                <h1>Game</h1>
                <Start startGame={this.startGame}/>
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