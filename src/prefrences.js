import {Component} from 'react';
import Start from './start';
import Stop from './stop';
import Reset from './reset';

class Prefrences extends Component {
    render() {
        return(
            <section>
                <h1>Prefrences</h1>
                {this.props.started ? null : <Start onClick={() => this.props.startGame()}/>}
                {this.props.started ? <Stop onClick={() => this.props.stopGame()}/> : null}
                <Reset onClick={() => this.props.reset()}/>
            </section>
        )
    }
}

export default Prefrences;