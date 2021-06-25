import {Component} from 'react';
import Game from './game';
import Prefrences from './prefrences';

class App extends Component {

    state = {
        cells: Array(30).fill().map(() => Array(60).fill(0)),
        started: false,
    }

    updateBoardState = (updatedState) => {
        this.setState({cells: updatedState});
    }
    startGame = () => {
        const tick = setInterval(this.calculateNextGeneration, 100);
        this.setState({interval: tick, started: true});
    }
    stopGame = () => {
        clearInterval(this.state.interval);
        this.setState({started: false})
    }
    reset = () => {
        clearInterval(this.state.interval);
        const freshState = Array(30).fill().map(() => Array(60).fill(0));
        this.setState({cells: freshState, started: false});
    }
    calculateNextGeneration = () => {
        //Creates two coppies of the 2d grid state: one for reference and the other for update.
        let currentState = this.state.cells.map(innerArray => innerArray.slice());
        let newState = this.state.cells.map(innerArray => innerArray.slice());
        for(let array = 0; array < currentState.length; array++){
            const cells = currentState[array];
            for(let cell = 0; cell < cells.length; cell++){
                let adjacentCells = 0;
                
                if(currentState[array-1]) {
                    if(currentState[array-1][cell-1] && currentState[array-1][cell-1] === 1){
                        adjacentCells++;
                    }
                }
                if(currentState[array-1] && currentState[array-1][cell] === 1){
                    adjacentCells++;

                }
                if(currentState[array-1]) {
                    if(currentState[array-1][cell+1] && currentState[array-1][cell+1] === 1) {
                        adjacentCells++;
                    }
                }
                if(currentState[array][cell-1] && currentState[array][cell-1] === 1){
                    adjacentCells++;
                }
                if(currentState[array][cell+1] && currentState[array][cell+1] === 1){
                    adjacentCells++;
                }
                if(currentState[array+1]) {
                    if(currentState[array+1][cell-1] && currentState[array+1][cell-1] === 1){
                        adjacentCells++;
                    }
                } 
                if(currentState[array+1] && currentState[array+1][cell] === 1){
                    adjacentCells++;
                }
                if(currentState[array+1]) {
                    if(currentState[array+1][cell+1] && currentState[array+1][cell+1] === 1){
                        adjacentCells++;
                    }
                }
                if(adjacentCells < 4 && adjacentCells > 1 && newState[array][cell] === 1){
                    continue;
                } else if(adjacentCells === 3){
                    newState[array][cell] = 1;
                } 
                else {
                    newState[array][cell] = 0;
                }
                if(adjacentCells === 8 && newState[array][cell] === 1){
                    newState[array][cell] = 3;
                } 
            }
        }
        this.setState({cells: newState});
    }
    render () {
        return (
            <main>
                <Prefrences started={this.state.started} startGame={this.startGame} stopGame={this.stopGame} reset={this.reset}/>
                <Game cells={this.state.cells} updateBoardState={this.updateBoardState}/>
            </main>
        )
    }
}

export default App;