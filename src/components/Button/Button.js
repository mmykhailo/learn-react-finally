import React from 'react';

function Button(props) {
    return (
        <button className="mdc-button mdc-card__action mdc-card__action--button __rippled" {...props}>{props.title}</button>
    );
}
export default Button;