import React, { useState, useEffect } from 'react';

function Hooks(props) {

    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);

    const handleClick = () => {

        if (contador >= (productos.length - 1)) {
            setCount(0);


        } else {
            setCount(contador + 1);
        }

    }

    const fetchApi = () => {
        console.log("llamar");
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProductos(data.products)
            })
    }

    useEffect(() => {
        fetchApi();
    }, [contador]);

    return (<div>
        <p>{contador}</p>
        <br></br>
        <h1>{productos[contador]?.title}</h1>
        <p>{productos[contador]?.description}</p>
        <img src={productos[contador]?.images[0]}></img>
        <br></br>
        <button onClick={handleClick}>Siguiente Producto</button>
    </div>);
}
export default Hooks;