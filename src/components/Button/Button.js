import React from 'react';

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
export default Button;