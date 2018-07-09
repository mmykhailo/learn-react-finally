import React from 'react';
import PropTypes from "prop-types";

function Button(props) {
    return (
        <button className="mdc-button mdc-card__action mdc-card__action--button __rippled" {...props}>
            {props.icon ?
                <i className='material-icons'>{props.icon}</i>
                :
                ''
            }
            {props.children ?
                props.children
                :
                ''
            }
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node,//node is something you can output*
};
export default Button;