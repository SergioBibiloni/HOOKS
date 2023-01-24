import React from 'react';

class Producto extends React.Component{
    constructor(props){
        super(props);
        this.state ={datos: props.datos}
        console.log(props)

    }

    render(){
        return(
            <div>
                <p>{this.state.datos.title}</p>
                <p>{this.state.datos.description}</p>
                <img src={this.state.datos.images[1]}></img>
            </div>
        );
    }
}

export default Producto;