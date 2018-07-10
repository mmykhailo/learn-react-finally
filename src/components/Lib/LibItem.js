import React, {Component} from 'react';
import '../../../node_modules/@material/button/dist/mdc.button.min.css';
import '../../../node_modules/@material/card/dist/mdc.card.min.css';
import {MDCRipple} from '../../../node_modules/@material/ripple';
import  PropTypes from 'prop-types';
import AddToFavorites from '../formElements/AddToFavorites/AddToFavorites'
import Button from '../Button/Button'
import Input from '../Form/Input'

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
            editing: false,
            newName: this.props.bookName
        };
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
        this.switchEditing = this.switchEditing.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleEditingSubmit = this.handleEditingSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        initRipple();
    }

    handleAddToFavorites(){
        this.props.onAddToFavorites(this.props.id)
    }

    handleEditing(val){
        this.setState({
            newName: val
        })
    }

    componentWillReceiveProps(nextProps){//use to manage next props before component update
/*
        console.log(nextProps);
*/
    }
    componentWillUpdate(nextProps, nextState){//use to manage next props and state before component update
        /*console.log(nextProps);
        console.log(nextState);*/
    }
    shouldComponentUpdate(nextProps, nextState){//return bool. if false component wont be visually update
        return true
    }
    componentDidUpdate(prevProps, prevState){//After component did update

    }
    componentWillUnmount(){//Before component is removed

    }

    handleEditingSubmit(event){
        event.preventDefault();
        console.log('submit changes');
        this.props.onEditing(this.props.id, this.state.newName);
        this.setState({
            editing: false
        })
    }
    handleDelete(){
        console.log('delete in item');
        this.props.onDelete(this.props.id)
    }

    switchEditing(){
        this.setState({
            editing: !this.state.editing
        })
    }

    renderEditing(){
        if(this.state.editing) {
            return (
                <div className='lib-list__item_editing'>
                    <form onSubmit={this.handleEditingSubmit}>
                        <Input
                            type="text"
                            placeholderMDC='Name book'
                            value={this.state.newName}
                            handleInputChange={this.handleEditing}
                        />
                        <Button type = 'submit'>Save book</Button>
                    </form>
                </div>
            )
        }
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
                            <Button onClick = {this.handleDelete}>Delete</Button>
                            <Button>Action 2</Button>
                        </div>
                        <div className="mdc-card__action-icons">
                            <AddToFavorites value={this.props.favorite} onAddToFavorites={this.handleAddToFavorites}/>
                            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share" onClick={this.switchEditing}>edit</button>
                        </div>
                    </div>
                </div>
                {this.renderEditing()}
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