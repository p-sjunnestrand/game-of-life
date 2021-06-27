import {Component} from 'react';
import Game from './game';
import Prefrences from './prefrences';
import InfoDisplay from './infoDisplay';

class App extends Component {

//State is comprised of 50 arrays each containing 50 items. Each item corresponds to cell on gameboard.
    state = {
        cells: Array(30).fill().map(() => Array(60).fill(0)),
        started: false,
    }

//Endpoint of click on individual cells. Updates state every time a cell is changed by click.
    updateBoardState = (updatedState) => {
        this.setState({cells: updatedState});
    }

//Starts timer that ticks 10 times/second and and fires function every time.
    startGame = () => {
        const tick = setInterval(this.calculateNextGeneration, 100);
        this.setState({interval: tick, started: true});
    }

//Stops timer which stops board update.
    stopGame = () => {
        clearInterval(this.state.interval);
        this.setState({started: false})
    }

//Stops timer and empties state.
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
                //Keeps track of how many adjacent cell to the current are alive.
                let adjacentCells = 0;
                
                //The following if-statements checks all cells adjacent to the current one. If any is alive, increments counter.
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

                //Following if-statements decides if the current cells shall live or die based on number in counter.
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
//When info is true, the info page is rendered, when false, gameboard is rendered.
    displayInfo = () => {
        this.setState({info: true})
    }
    closeInfo = () => {
        this.setState({info: false})
    }
    render () {
        return (
            <div>
                <header>
                    <h1>Conway's Game of Life</h1>
                    <h4>by Petter Sjunnestrand</h4>
                </header>
                <main>
                    {this.state.info ? <InfoDisplay onClick={this.closeInfo} /> : <Game cells={this.state.cells} updateBoardState={this.updateBoardState}/>}
                    <Prefrences started={this.state.started} startGame={this.startGame} stopGame={this.stopGame} reset={this.reset} displayInfo={this.displayInfo}/>
                </main>
            </div>
        )
    }
}

export default App;