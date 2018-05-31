import React, {Component} from 'react';
import './main.less';
import './App.css';
import '@material/button/dist/mdc.button.min.css';
import '@material/card/dist/mdc.card.min.css';
import book1img from "./img/1984.jpg";
import './main.scss';
import {MDCRipple} from '@material/ripple';

let initRippleBtns = function () {
    for (let i = 0; i < document.getElementsByClassName('mdc-btn--rippled').length; i++) {
        new MDCRipple(document.getElementsByClassName('mdc-btn--rippled')[i]);
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
        initRippleBtns();
    }



    render() {
        return (
            <div className="App">

                <main>
                    <AppHeader title = "React" logoUrl={this.props.logoUrl}/>
                    <section className="lib-list">
                        <div className="lib-item">
                            <img src={book1img} alt="book 1" className="lib-item__img"/>
                            <h2 className="lib-item__name">
                                Book 1
                            </h2>
                            <p className="lib-item-description">
                                Book 1 description
                            </p>
                            <div className="list-item__footer">
                                <button className="list-item__footer_btn foo-button mdc-button mdc-btn--rippled">Прочитана
                                </button>
                                <button className="list-item__footer_btn foo-button mdc-button mdc-btn--rippled">Забыть
                                    книгу)))
                                </button>
                            </div>

                        </div>
                        <div className="mdc-card">
                            <div className="mdc-card__media mdc-card__media--square">
                                <div className="mdc-card__media-content">Title</div>
                            </div>
                            <div className="mdc-card__actions">
                                <div className="mdc-card__action-buttons">
                                    <button className="mdc-button mdc-card__action mdc-card__action--button mdc-btn--rippled">Action 1</button>
                                    <button className="mdc-button mdc-card__action mdc-card__action--button mdc-btn--rippled">Action 2</button>
                                </div>
                                <div className="mdc-card__action-icons">
                                    <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
                                    <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
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
    componentDidMount() {
        initRippleBtns();
    }
    render() {
        return (
            <header className="App-header">
                <div>{this.state.score}</div>
                <img src={this.props.logoUrl} className="App-logo" alt="logo" onClick={this.handleClick}/>
                <h1 className="App-title">{this.props.title}</h1>
            </header>
        );
    }
}

export default App;
