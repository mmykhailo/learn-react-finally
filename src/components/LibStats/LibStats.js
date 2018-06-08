import React, {Component} from 'react';
import  PropTypes from 'prop-types';
class LibStats extends Component {
    render() {
        let total = this.props.lib.length;
        let favorited = this.props.lib.filter(lib => lib.favorite).length;
        return (
            <div className="lib-stats">
                Всего: {total}<br/>
                favorited: {favorited}<br/>
            </div>
        );
    }
}
LibStats.propTypes = {
    lib: PropTypes.array.isRequired,
};

export default LibStats;