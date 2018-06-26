import React, {Component} from 'react';
import PropTypes from "prop-types";

//components
import Button from '../Button/Button'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submitted: true
        });
        let bookName = this.refs.bookName.value;
        if(bookName){
            this.props.onAdd(bookName);
        }
        this.refs.bookName.value = '';
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Name book' ref = 'bookName'/>
                <Button type = 'submit' foo = "bar">Add book</Button>{/*foo is example. You can pass eny props. And then use them by {...props} in this component*/}
            </form>
        );
    }
}
Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;