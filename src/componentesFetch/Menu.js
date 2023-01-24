import React from 'react';
import './fetch.css';
import Producto from './Producto.js';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.añadirProducto = this.añadirProducto.bind(this);
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.products
                });
            })
            .catch(error => {
                console.log(error);
            });

    }

    añadirProducto() {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                title: "Mi producto",
                description: "La descripcion de mi producto",
                images: ["https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg"]

            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data2: res
                })
            })


    }




    render() {
        return (
            <div class="main">
                <h1>PRODUCTOS</h1>
                <div>
                    {this.state.data.map((value) => <Producto datos={value}></Producto>)}
                    {this.state.data2 && <Producto datos={this.state.data2} />}
                </div>
                <button onClick={this.añadirProducto}>Añadir producto</button>
            </div>
        );
    }


}

export default Menu;