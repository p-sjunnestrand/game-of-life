import {Component} from 'react';
import Game from './game';
import Prefrences from './prefrences';

class App extends Component {
    render () {
        return (
            <main>
                <Prefrences />
                <Game />
            </main>
        )
    }
}

export default App;