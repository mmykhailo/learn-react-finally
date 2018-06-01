import React, {Component} from 'react';
import './main.css';
import './App.css';

import book1 from './img/1984.jpg'
import  PropTypes from 'prop-types';


//Components

import Header from './components/Header/Header'
import Lib from './components/Lib/Lib'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <main className="App">
                <Header title='Learn React' logo={this.props.logo}/>
                <Lib title="React" logo={this.props.logo}/>
            </main>
        );
    }
}





export default App;
