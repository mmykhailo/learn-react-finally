import React, {Component} from 'react';
import  PropTypes from 'prop-types';


class Header extends Component {
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
Header.propTypes = {
    title: PropTypes.string.isRequired
};
Header.defaultProps = {
    title: 'Default title'
};

export default Header;