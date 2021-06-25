import {Component} from 'react';
import Cell from './cell';
import Start from './start';
import Stop from './stop';
import Reset from './reset';

class Game extends Component {

    
        //State is comprised of 50 arrays each containing 50 items. Each item corresponds to cell on gameboard.
        
        // state = {
        //     cells: Array(30).fill().map(() => Array(60).fill(0)),
        //     started: false,
        // }
    

    //Handles click on cell. Uses parameters to find correct array and cell. Changes to 1 if 0 and vice versa, then updates state.
    selectCell = (array, cell) => {
        let updatedState = this.props.cells.map(innerArray => innerArray.slice());
        if(updatedState[array][cell] === 0) {
            updatedState[array][cell] = 1;
        } else {
            updatedState[array][cell] = 0;
        }
        this.props.updateBoardState(updatedState)
        // this.setState({cells: updatedState})
    }

    // startGame = () => {
    //     const tick = setInterval(this.calculateNextGeneration, 100);
    //     this.setState({interval: tick, started: true});
    // }

    // calculateNextGeneration = () => {
    //     //Creates two coppies of the 2d grid state: one for reference and the other for update.
    //     let currentState = this.state.cells.map(innerArray => innerArray.slice());
    //     let newState = this.state.cells.map(innerArray => innerArray.slice());
    //     for(let array = 0; array < currentState.length; array++){
    //         const cells = currentState[array];
    //         for(let cell = 0; cell < cells.length; cell++){
    //             let adjacentCells = 0;
                
    //             if(currentState[array-1]) {
    //                 if(currentState[array-1][cell-1] && currentState[array-1][cell-1] === 1){
    //                     adjacentCells++;
    //                 }
    //             }
    //             if(currentState[array-1] && currentState[array-1][cell] === 1){
    //                 adjacentCells++;

    //             }
    //             if(currentState[array-1]) {
    //                 if(currentState[array-1][cell+1] && currentState[array-1][cell+1] === 1) {
    //                     adjacentCells++;
    //                 }
    //             }
    //             if(currentState[array][cell-1] && currentState[array][cell-1] === 1){
    //                 adjacentCells++;
    //             }
    //             if(currentState[array][cell+1] && currentState[array][cell+1] === 1){
    //                 adjacentCells++;
    //             }
    //             if(currentState[array+1]) {
    //                 if(currentState[array+1][cell-1] && currentState[array+1][cell-1] === 1){
    //                     adjacentCells++;
    //                 }
    //             } 
    //             if(currentState[array+1] && currentState[array+1][cell] === 1){
    //                 adjacentCells++;
    //             }
    //             if(currentState[array+1]) {
    //                 if(currentState[array+1][cell+1] && currentState[array+1][cell+1] === 1){
    //                     adjacentCells++;
    //                 }
    //             }
    //             if(adjacentCells < 4 && adjacentCells > 1 && newState[array][cell] === 1){
    //                 continue;
    //             } else if(adjacentCells === 3){
    //                 newState[array][cell] = 1;
    //             } 
    //             else {
    //                 newState[array][cell] = 0;
    //             }
    //             if(adjacentCells === 8 && newState[array][cell] === 1){
    //                 newState[array][cell] = 3;
    //             } 
    //         }
    //     }
    //     this.setState({cells: newState});
    // }
    // stopGame = () => {
    //     clearInterval(this.state.interval);
    //     this.setState({started: false})
    // }
    // reset = () => {
    //     clearInterval(this.state.interval);
    //     const freshState = Array(30).fill().map(() => Array(60).fill(0));
    //     this.setState({cells: freshState, started: false});
    // }
    render() {
        return(
            <section>
                <h1>Game</h1>
                {/* {this.state.started ? null : <Start startGame={this.props.startGame}/>}
                {this.state.started ? <Stop stopGame={this.stopGame}/> : null}
                <Reset reset={this.reset}/> */}
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