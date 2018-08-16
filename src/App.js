import React, {Component} from 'react';
import './main.css';
import './App.css';
//Components
import Header from './components/Header/Header'
import Lib from './components/Lib/Lib'
import About from './components/About/About'
import { HashRouter, Route, Switch } from 'react-router-dom';


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
{/*
                <Lib title="React" logo={this.props.logo}/>
*/}

                <HashRouter>
                    <div className="content">
                        <Route exact path="/" component={Lib}/>
                        <Route path="/lib" component={Lib}/>
                        <Route path="/about" component={About}/>
                    </div>
                </HashRouter>
            </main>
        );
    }
}





export default App;


