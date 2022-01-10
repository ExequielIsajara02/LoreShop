import { createContext, useState} from "react";


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    const addProductsInCart  = (product) => {
        
        // Comprobar que el producto existe

        const cartProduct = products.find(element => element.id === product.id)

        if(cartProduct) {
            setTotal(total + product.price, + product.quantity + 1)
        }
        else {
            setProducts([...products, product])
            setTotal(total + product.price * product.quantity)
        }
        
       
    }

    const removeProductInCart = (cartItem) => {
        setProducts(products.filter(product => product.id !== cartItem.id))
        setTotal(total - cartItem.price * cartItem.quantity)
    }

    const removeAllProductsInCart = () => {
        setProducts([])
        setTotal(0)
        
    }
    

    const dataProducts = {
        products,
        addProductsInCart,
        removeProductInCart,
        removeAllProductsInCart,
        total

    }

    return(
        <ProductsContext.Provider value={dataProducts}>
            {children}
        </ProductsContext.Provider>
    )

}

export { ProductsProvider }
export default ProductsContext