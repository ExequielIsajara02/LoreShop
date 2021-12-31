import { createContext, useState} from "react";


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    

    const addProducts  = (product) => {
        
        setTotal(total + product.price * product.quantity)

        if(products.includes(product) === false) {
            setProducts([...products, product])
        }

       
    }

    const removeAllProducts = () => {
        setProducts([])
        setTotal(0)
        
    }


    const removeProduct = () => {
        
    }

    
    
    

    const dataProducts = {
        products,
        addProducts,
        removeProduct,
        removeAllProducts,
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