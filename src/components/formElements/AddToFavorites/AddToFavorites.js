/**
 * Created by M on 04.06.2018.
 */
import React, {Component} from 'react';
import '@material/button/dist/mdc.button.min.css';
import '@material/card/dist/mdc.card.min.css';
import {MDCRipple} from '@material/ripple';
import  PropTypes from 'prop-types';


function AddToFavorites(props) {
    return (
        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share" onClick={props.onChange}>{props.value ? 'favorite_border':'favorite'}</button>
    );
}

AddToFavorites.propTypes = {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};
AddToFavorites.defaultProps = {
    value: "Book name undefined(",
};
export default AddToFavorites;