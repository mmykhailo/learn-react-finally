import React, {Component} from 'react';
import './main.less';
import './App.css';
import '@material/button/dist/mdc.button.css';
import book1img from "./img/1984.jpg";
import './main.scss';
import {MDCRipple} from '@material/ripple';

import mdcAutoInit from '@material/auto-init';

mdcAutoInit.register('MDCRipple', MDCRipple);
mdcAutoInit();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            score: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        for(var i = 0; i < document.getElementsByClassName('btn--rippled').length; i++){
            new MDCRipple(document.getElementsByClassName('btn--rippled')[i]);
        }
    }
    handleClick(){
        console.log('Click handle');
        this.setState((prevState, props) => {
            return {score: prevState.score + 1};
        });
    }

    render() {
        return (
            <div className="App">

                <main>
                    <header className="App-header">
                        <div>{this.state.score}</div>
                        <img src={this.props.logoUrl} className="App-logo" alt="logo" onClick={this.handleClick}/>
                        <h1 className="App-title">{this.props.title}</h1>
                    </header>
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
                                 <button className="list-item__footer_btn foo-button mdc-button btn--rippled">Прочитана</button>
                                 <button className="list-item__footer_btn foo-button mdc-button btn--rippled">Забыть книгу)))</button>
                                 <button className="foo-button mdc-button btn--rippled">
                                     Button
                                 </button>

                             </div>

                         </div>
                    </section>

                </main>
            </div>
        );
    }
}

export default App;
