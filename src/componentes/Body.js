import React from 'react';
import "./body.css";


class Body extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            url: props.direccionImagen,
            descripcion: props.letrasDesc,
            numero: props.numeroInicial
        }

    }


    numeroAleatorio = () => {

        this.setState({ numero: Math.floor(Math.random() * 10) });

    }


    render() {
        return (

            <div class="bodydiv">
                <img src={this.state.url} />
                <p>{this.state.descripcion}</p>
                <button onClick={this.numeroAleatorio}>Cambiar numero</button>
                <div>{this.state.numero}</div>
            </div>


        );
    }

}

export default Body;