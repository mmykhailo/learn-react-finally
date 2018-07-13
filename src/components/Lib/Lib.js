import React, {Component} from 'react';
//components
import LibItem from './LibItem'
import LibStats from './LibStats'
import Form from '../Form/Form'



class Lib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lib: [

            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        fetch('/api/lib')
            .then(res => res.json())
            .then(lib => this.setState({
                lib: lib
            }))
            .catch(error=> console.error(error));
    }

    handleAddToFavorites(id){
        let newLib = this.state.lib.map(book => {
            if(book.id === id){
                book.favorite = !book.favorite;
            }
            return book;
        });
        this.setState({
            lib: newLib
        })
    }


    handleAdd(bookName){
        let newBook = {
            bookName: bookName,
            favorite: false,
            bookImg: "http://localhost:3000/img/1984(2).jpg",
            id: this.nextBookId()
        };
        let newLib = [...this.state.lib, newBook];
        this.setState({
            lib: newLib,
        });
    }

    handleEditing(id, newName){
        console.log('editing in lib' + id + ' ' + newName)
        let newLib = this.state.lib.map(book => {
            if(book.id === id){
                book.bookName = newName;
            }
            return book;
        });
        this.setState({
            lib: newLib
        })
    }
    handleDelete(id){
        console.log('delete in lib' + id);
        let index = this.state.lib.findIndex(x => x.id === id);
        console.log(index);
        let newLib = this.state.lib;
        newLib.splice(index, 1);
        this.setState({
            lib: newLib
        })
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
                            onEditing = {this.handleEditing}
                            onDelete = {this.handleDelete}
                        />
                    )}
                </section>
            </div>
        );
    }
}

export default Lib;