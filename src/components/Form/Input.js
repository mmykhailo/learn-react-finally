import React, {Component} from 'react';
import PropTypes from "prop-types";
import "@material/textfield/dist/mdc.textfield.css";
import {MDCTextField} from "@material/textfield";


//components

let initMDCInput = function () {
    for (let i = 0; i < document.getElementsByClassName('mdc-text-field').length; i++) {
        new MDCTextField(document.getElementsByClassName('mdc-text-field')[i]);
    }
};

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        initMDCInput();
    }

    handleChange(event){
        let val = event.target.value;
        this.setState({
            inputValue: val
        });
        this.props.handleInputChange(val);
    }

    render() {
        return (
            <div>
                <div className="mdc-text-field">
                    <input value={this.props.value} onChange={this.handleChange} className="mdc-text-field__input"/>
                        <label className="mdc-floating-label" htmlFor="my-text-field">{this.props.placeholderMDC}</label>
                        <div className="mdc-line-ripple"> </div>
                </div>
            </div>
        );
    }
}

Input.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default Input;