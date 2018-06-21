import React, {Component} from 'react';
//components
import Button from '../Button/Button'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <form className='form'>
                <input type="text" placeholder='Name book'/>
                <Button type = 'submit'>Add book</Button>
            </form>
        );
    }
}
Form.propTypes = {
/*
    lib: PropTypes.array.isRequired,
*/
};

export default Form;