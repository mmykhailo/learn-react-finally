import React, {Component} from 'react';
import './main.css';
import './App.css';
//Components
import Header from './components/Header/Header'


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
                {this.props.children}
            </main>
        );
    }
}





export default App;


