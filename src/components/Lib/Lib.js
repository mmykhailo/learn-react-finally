import React, {Component} from 'react';
//components
import LibItem from '../LibItem/LibItem'
import book1 from '../../img/1984.jpg'


class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }
    render() {
        return (
            <section className="lib-list">
                <LibItem bookName = "Book1" favorite = {true} bookImg = {book1}/>
                <LibItem bookName = "Book1" favorite = {false} bookImg = {book1}/>
            </section>

        );
    }
}

export default Lib;