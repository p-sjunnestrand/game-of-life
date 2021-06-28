Conway's Game of Life is a cellular automation invented by John Horton Conway. It is a game that plays itself and is thus described as a "0-player game".
                        
The game consists of a gameboard built up by 60x30 square cells. Each cell can be either alive (teal) or dead (black).

To play, click on any number of cells to turn them alive or dead. When the start-button is clicked, the game calculates the next generation of dead and alive cells based on the starting board.

There are three rules to decide whether a cell is alive or dead in the next generation:

    1. Any live cell with two or three live neighbours survives.
    2. Any dead cell with three live neighbours becomes a live cell.
    3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

Every generation lasts for 1/10th of a second and thus the cells on the game board seems to evolve.

To read more about Conway's game of life, visit the Wikipedia article: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life



Created with React.

To install, run $ npm install in the terminal.
To run locally, run $ npm start