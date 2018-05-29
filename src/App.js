import React, {Component} from 'react';
import './main.less';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
{/*
                    <img src='' className="App-logo" alt="logo"/>
*/}
                    <img src={this.props.logoUrl} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
