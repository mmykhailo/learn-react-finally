import React, {Component} from 'react';
import '@material/button/dist/mdc.button.min.css';
import '@material/card/dist/mdc.card.min.css';
import {MDCRipple} from '@material/ripple';
import  PropTypes from 'prop-types';
import AddToFavorites from '../formElements/AddToFavorites/AddToFavorites'

//components


let initRipple = function () {
    for (let i = 0; i < document.getElementsByClassName('__rippled').length; i++) {
        new MDCRipple(document.getElementsByClassName('__rippled')[i]);
    }
};


class LibItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: this.props.favorite,
        };
    }

    componentDidMount() {
        initRipple();
    }
    changeFavorite(id){
        const newFav = !this.state.favorite;
        this.setState({favorite: newFav});
    }

    render() {
        return (
            <div className="lib-list__item mdc-card">
                <div className="mdc-card__primary-action mdc-ripple-upgraded __rippled">
                    <div className="mdc-card__media">
                        <img className="lib-list__item_img" src={this.props.bookImg} alt=""/>
                        <h2>
                            {this.props.bookName}
                        </h2>
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <button className="mdc-button mdc-card__action mdc-card__action--button __rippled">Action
                                1
                            </button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button __rippled">Action
                                2
                            </button>
                        </div>
                        <div className="mdc-card__action-icons">
                            <AddToFavorites value={this.state.favorite} onAddFavorite = {this.props.changeFavorite(id)}/>
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                                    title="Share">share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
LibItem.propTypes = {
    bookName: PropTypes.string.isRequired,
};
LibItem.defaultProps = {
    bookName: "Book name undefined(",
};
export default LibItem;