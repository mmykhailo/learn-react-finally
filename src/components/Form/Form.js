import React, {Component} from 'react';
import PropTypes from "prop-types";
//components
import Button from '../Button/Button';
import Input from './Input'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            inputValue: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {

    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submitted: true
        });
        let bookName = this.state.inputValue;
        if(bookName){
            this.props.onAdd(bookName);
        }
        this.setState({
            inputValue: ''
        });
    }
    handleInputChange(val){
        this.setState({
            inputValue: val
        })
    }

    render() {
        return (
            <div className='lib__add-book'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <Input type="text" placeholderMDC='Name book' value={this.state.inputValue} handleInputChange={this.handleInputChange}/>
                    <Button type = 'submit' foo = "bar">Add book</Button>{/*foo is example. You can pass eny props. And then use them by {...props} in this component*/}
                </form>
            </div>
        );
    }
}
Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;