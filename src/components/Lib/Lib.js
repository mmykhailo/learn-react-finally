import React, {Component} from 'react';
//components
import LibItem from '../Lib/LibItem/LibItem'

class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    componentDidMount() {

    }
    render() {
        return (
            <section className="lib-list">
                <LibItem/>
            </section>

        );
    }
}
export default Lib;