import React from 'react';
import App from '../App.js'


class Header extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            url: props.direcImg
        }

    }


    render() {
        return (

            <div class="imagenHeader">
                <img src={this.state.url} />
            </div>
        );

    }

}

export default Header;