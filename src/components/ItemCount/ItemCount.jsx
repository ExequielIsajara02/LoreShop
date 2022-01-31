import React, {useState} from "react";
import "./ItemCount.css"


const ItemCount = ({stock, onCart, sendItem}) => {
    const [number, setNumber] = useState(0)
    const [add, setAdd] = useState(stock)


    const upNumber = () => {
       
        if(number < stock) {
            setNumber(number + 1)
            onCart(number + 1)
        }
    }

    const downNumber = () => {
        if(number >= 1) {
            setNumber(number - 1)
        }
    }


    const addCart = () => {
        setAdd(stock - number)
        sendItem()
        
    }

   

    return(
        <div className="count-container">
            {
                // Cuando add llegue a cero, sera lo mismo que decir false y pasara al else
                add ? <p>Stock disponible: {add}</p> : <p>No hay stock disponible</p>
            }
            <div className="count">
                <button onClick={upNumber}>+</button>
                <p>Cantidad: {number}</p>
                <button onClick={downNumber}>-</button>
            </div>
            <button className="add-on" onClick={addCart}>Comprar</button>
        </div>
    )
}

export default ItemCount;