import React, {Component} from 'react';
import './main.css';
import './App.css';
import '@material/button/dist/mdc.button.min.css';
import '@material/card/dist/mdc.card.min.css';
import {MDCRipple} from '@material/ripple';
import book1 from './img/1984.jpg'
import  PropTypes from 'prop-types';

let initRipple = function () {
    for (let i = 0; i < document.getElementsByClassName('__rippled').length; i++) {
        new MDCRipple(document.getElementsByClassName('__rippled')[i]);
    }
};

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

                <main>
                    <AppHeader title = {3} logo={this.props.logo}/>
                    <Lib title = "React" logo={this.props.logo}/>
                </main>
            </main>
        );
    }
}

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            score: 0,
        };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        console.log('Click handle');
        this.setState((prevState, props) => {
            return {score: prevState.score + 1};
        });
    }
    render() {
        return (
            <header className="App-header">
                <div>{this.state.score}</div>
                <img src={this.props.logo} className="App-logo" alt="logo" onClick={this.handleClick}/>
                <h1 className="App-title">{this.props.title}</h1>
            </header>
        );
    }
}
AppHeader.propTypes = {
    title: PropTypes.string
};
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

class LibItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    componentDidMount() {
        initRipple();
    }
    render() {
        return (
            <div className="lib-list__item mdc-card">
                <div className="mdc-card__primary-action mdc-ripple-upgraded __rippled">
                    <div className="mdc-card__media">
                        <div className="mdc-card__media-content">Title</div>
                        <img src={book1} alt=""/>
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <button className="mdc-button mdc-card__action mdc-card__action--button __rippled">Action 1</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button __rippled">Action 2</button>
                        </div>
                        <div className="mdc-card__action-icons">
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
