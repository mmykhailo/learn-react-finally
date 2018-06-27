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
                    favorite: true,
                    bookImg: book2,
                    id: 2
                },
                {
                    bookName: 'book 3 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 3
                },
                {
                    bookName: 'book 4 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 4
                },
                {
                    bookName: 'book 5 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 5
                },
                {
                    bookName: 'book 6 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 6
                },
            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    }
    handleAddToFavorites(id){
        let newLib = this.state.lib;
        for (let i = 0; i < this.state.lib.length; i++){
            if(newLib[i].id === id){
                newLib[i].favorite = !newLib[i].favorite;
                break;
            }
        }
        this.setState({
            lib: newLib
        })
    }
    handleAdd(bookName){
        let newBook = {
            bookName: bookName,
            favorite: false,
            bookImg: book1,
            id: this.nextBookId()
        };
        let newLib = [...this.state.lib, newBook];
        this.setState({
            lib: newLib,
        });
    }
    nextBookId(){
        this._nextBookId = this._nextBookId || Math.max.apply(Math,this.state.lib.map(function(book){return book.id;}));
        return ++this._nextBookId;
    }
    render() {
        return (
            <div className='lib'>
                <LibStats lib = {this.state.lib}/>
                <Form onAdd={this.handleAdd}/>
                <section className="lib-list">
                    {this.state.lib.map(book =>
                        <LibItem
                            id = {book.id}
                            key = {book.id}
                            bookName = {book.bookName}
                            favorite = {book.favorite}
                            bookImg = {book.bookImg}
                            onAddToFavorites = {this.handleAddToFavorites}
                        />
                    )}
                </section>
            </div>


        );
    }
}

export default Lib;