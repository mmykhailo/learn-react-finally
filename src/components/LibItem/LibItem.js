import React, {Component} from 'react';
import '@material/button/dist/mdc.button.min.css';
import '@material/card/dist/mdc.card.min.css';
import {MDCRipple} from '@material/ripple';
import  PropTypes from 'prop-types';
import AddToFavorites from '../formElements/AddToFavorites/AddToFavorites'
import Button from '../Button/Button'

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
        this.onAddToFavorites = this.onAddToFavorites.bind(this);
    }

    componentDidMount() {
        initRipple();
    }
    onAddToFavorites(){
        this.props.onAddToFavorites(this.props.id)
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
                            <Button>Action 1</Button>
                            <Button>Action 2</Button>
                        </div>
                        <div className="mdc-card__action-icons">
                            <AddToFavorites value={this.props.favorite} onAddToFavorites={this.onAddToFavorites}/>
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share" >share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
LibItem.propTypes = {
  bookImg: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onAddToFavorites: PropTypes.func.isRequired
};
LibItem.defaultProps = {
    bookName: "Book name undefined(",
};
export default LibItem;