import { Component } from "react";

class InfoDisplay extends Component {
    render () {
        return (
            <section id="infoSection">
                <div id="infoBox">
                    <div id="infoText">
                        <p>Conway's Game of Life is a cellular automation invented by John Horton Conway. It is a game that plays itself and is thus described as a "0-player game".</p>
                        
                        <p>The game consists of a gameboard built up by 60x30 square cells. Each cell can be either alive (teal) or dead (black).</p>
                        
                        <p>To play, click on any number of cells to turn them alive or dead. When the start-button is clicked, the game calculates the next generation of dead and alive cells based on the starting board.</p>
                        
                        <p>There are three rules to decide whether a cell is alive or dead in the next generation:</p>
                        
                        <ol>
                            <li>Any live cell with two or three live neighbours survives.</li>
                            <li>Any dead cell with three live neighbours becomes a live cell.</li>
                            <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
                        </ol>
                        
                        <p>Every generation lasts for 1/10th of a second and thus the cells on the game board seems to evolve.</p>
                    
                        <p>To read more about Conway's game of life, visit the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia</a> article.</p>
                    </div>
                    <button onClick={this.props.onClick}>Close</button>
                </div>
            </section>
        )
    }
}

export default InfoDisplay;