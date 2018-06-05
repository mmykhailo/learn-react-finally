import React, {Component} from 'react';
//components
import LibItem from '../LibItem/LibItem'
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
                },{
                    bookName: 'book 2 in lib',
                    favorite: false,
                    bookImg: book2,
                    id: 2
                },
            ]


        };
    }
    /*changeFavorite(id){
        const newLib = this.state.lib.slice();
        var changedLibItem = newLib.find(function (obj) { return obj.id === 3; });

/!*
        this.setState({squares: squares});
*!/
    }
*/

    componentDidMount() {

    }
    render() {
        return (
            <section className="lib-list">
                <LibItem bookName = {this.state.lib[0].bookName} favorite = {this.state.lib[0].favorite} bookImg = {this.state.lib[0].bookImg}/>
                <LibItem bookName = {this.state.lib[1].bookName} favorite = {this.state.lib[1].favorite} bookImg = {this.state.lib[1].bookImg}/>
            </section>

        );
    }
}

export default Lib;