/**
 * Created by M on 04.06.2018.
 */
import React from 'react';
import  PropTypes from 'prop-types';


function AddToFavorites(props) {
    return (
        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share" onClick={props.onAddToFavorites}>{props.value ? 'favorite_border':'favorite'}</button>
    );
}

AddToFavorites.propTypes = {
    value: PropTypes.bool.isRequired,
    onAddToFavorites: PropTypes.func.isRequired
};
AddToFavorites.defaultProps = {
    value: "Book name undefined(",
};
export default AddToFavorites;