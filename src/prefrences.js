import {Component} from 'react';
import Start from './start';
import Stop from './stop';
import Reset from './reset';
import InfoBtn from './infoBtn';

class Prefrences extends Component {
    render() {
        return(
            <section id="prefrences">
                {this.props.started ? null : <Start onClick={() => this.props.startGame()}/>}
                {this.props.started ? <Stop onClick={() => this.props.stopGame()}/> : null}
                <Reset onClick={() => this.props.reset()}/>
                <InfoBtn onClick={() => this.props.displayInfo()}/>
            </section>
        )
    }
}

export default Prefrences;