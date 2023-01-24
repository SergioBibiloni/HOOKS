import React from 'react';
import './menu.css';

class Menu extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            array: props.arrayMenu
        }

    }

    render() {
        return (
            <div class="nav">
                {this.state.array.map((valor) => <h2>{valor}</h2>)}
            </div>
        );

    }

}

export default Menu;