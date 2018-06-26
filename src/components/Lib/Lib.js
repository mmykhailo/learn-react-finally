import React, {Component} from 'react';
//components
import LibItem from '../LibItem/LibItem'
import LibStats from '../LibStats/LibStats'
import Form from '../Form/Form'
import book1 from '../../img/1984.jpg'
import book2 from '../../img/1984(2).jpg'


class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lib: [
                {
                    bookName: 'book 1 in lib',
                    favorite: true,
                    bookImg: book1,
                    id: 1
                }, {
                    bookName: 'book 2 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 2
                },
            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAddToFavorites(){
        console.log('Change in lib');
    }
    handleAdd(bookName){
        console.log('Add to lib: ' + bookName + ' id: next');
        let newBook = {
            bookName: bookName,
            favorite: true,
            bookImg: book1,
            id: this.nextBookId()
        };
        console.log(newBook)
        let newLib = [...this.state.lib, newBook];
        this.setState({
            lib: newLib,
        });
        console.log(newLib);
    }
    nextBookId(){
        this._nextBookId = this._nextBookId || Math.max.apply(Math,this.state.lib.map(function(book){return book.id;}));
        return ++this._nextBookId;
    }
    render() {
        return (
            <div className='lib'>
                <LibStats lib = {this.state.lib}/>
                <section className="lib-list">
                    {this.state.lib.map(book =>
                        <LibItem
                            key = {book.id}
                            bookName = {book.bookName}
                            favorite = {book.favorite}
                            bookImg = {book.bookImg}
                            onAddToFavorites = {this.handleAddToFavorites}
                        />
                    )}
                </section>
                <Form onAdd={this.handleAdd}/>
            </div>


        );
    }
}

export default Lib;