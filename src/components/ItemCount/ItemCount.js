import React, {useState} from "react";
import "./ItemCount.css"

const ItemCount = ({stock}) => {
    const [number, setNumber] = useState(0)

    const upNumber = () => {
       if(number < stock) {
        console.log("El estado es: " + number)
        setNumber(number + 1)
       }
    }

    const downNumber = () => {
        if(number >= 1) {
            console.log("El estado es: " + number)
            setNumber(number - 1)
        }
    }


    return(
        <div className="count-container">
            <div className="count">
                <button onClick={upNumber}>+</button>
                <p>Cantidad: {number}</p>
                <button onClick={downNumber}>-</button>
            </div>
            <h4 className="add-on">Agregar al carrito</h4>
        </div>
    )
}

export default ItemCount;