// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const pics = this.props.catPics.map( pic => <img src={pic.url} alt='cat'/> )
        return (
            <div>
                {pics}
            </div>
        );
    }
}

export default CatList;
