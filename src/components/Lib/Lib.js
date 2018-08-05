import React, {Component} from 'react';
//components
import LibItem from './LibItem'
import LibStats from './LibStats'
import Form from '../Form/Form'
import axios from 'axios'
import ReactCSSTransionGroup from 'react-addons-css-transition-group'


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

    componentDidMount() {
        axios('/api/lib')
            .then(res => res.data)
            .then(lib => this.setState({
                lib: lib
            }))
            .catch(error => console.error(error));
    }

    handleAddToFavorites(id) {
        axios.patch(`/api/lib/${id}`)
            .then(response => {
                    let newLib = this.state.lib.map(book => {
                        if (book.id === id) {
                            book.favorite = response.data.favorite;
                        }
                        return book;
                    });
                    this.setState({
                        lib: newLib
                    })
                }
            );
    }


    handleAdd(bookName) {

        let newBook = {
            bookName: bookName,
            favorite: false,
            bookImg: "/img/1984(2).jpg"
        };
        axios.post('/api/lib', newBook)
            .then(res => res.data)
            .then(newBook => {
                    let newLib = [...this.state.lib, newBook];
                    this.setState({
                            lib: newLib,
                        }
                    );
                }
            );
    }

    handleEditing(id, newName) {
        axios.put(`/api/lib/${id}`, {newName})
            .then(response => {
                console.log('editing in lib' + id + ' ' + newName)
                const newLib = this.state.lib.map(book => {
                    if (book.id === id) {
                        console.log(id)
                        book.bookName = response.data.bookName;
                    }
                    return book;
                });
                this.setState({
                    lib: newLib
                })
                }
            );
    }

    handleDelete(id) {
        axios.delete(`/api/lib/${id}`)
            .then(() => {
                    let index = this.state.lib.findIndex(x => x.id === id);
                    let newLib = this.state.lib;
                    newLib.splice(index, 1);
                    this.setState({
                            lib: newLib
                        }
                    )
                }
            );

    }

    render() {
        return (
            <div className='lib'>
                <LibStats lib={this.state.lib}/>
                <Form onAdd={this.handleAdd}/>
                <ReactCSSTransionGroup
                    component='section'
                    className='lib-list'
                    transitionName = 'lib-list__item-animate'
                    transitionEnterTimeout = {1000}
                    transitionLeaveTimeout = {1000}
                    >
                    {this.state.lib.map(book =>
                        <LibItem
                            id={book.id}
                            key={book.id}
                            bookName={book.bookName}
                            favorite={book.favorite}
                            bookImg={book.bookImg}
                            onAddToFavorites={this.handleAddToFavorites}
                            onEditing={this.handleEditing}
                            onDelete={this.handleDelete}
                        />
                    )}
                </ReactCSSTransionGroup>
            </div>
        );
    }
}

export default Lib;