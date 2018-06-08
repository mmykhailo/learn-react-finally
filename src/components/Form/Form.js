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
            <form action="" className='form'>
                <input type="text" placeholder='Name book'/>
                <Button title = 'Add book' type = 'submit' test = 'test'/>
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