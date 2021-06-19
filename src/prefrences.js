import {Component} from 'react';
import Start from './start';
import Reset from './reset';

class Prefrences extends Component {
    render() {
        return(
            <section>
                <h1>Prefrences</h1>
                {/* <Start /> */}
                <Reset />
            </section>
        )
    }
}

export default Prefrences;