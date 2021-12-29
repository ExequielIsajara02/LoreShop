import { createContext, useState} from "react";


const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    

    const addProducts  = (product, productsId) => {
        console.log("Accediendo al producto desde el context")

        let arrayProducts = products.some(element => element === product);

        if(arrayProducts) {
            setProducts([product])
        }
        if(arrayProducts === false){
            setProducts([...products, product])

        }
    }


    const dataProducts = {
        products,
        addProducts
    }

    return(
        <ProductsContext.Provider value={dataProducts}>
            {children}
        </ProductsContext.Provider>
    )

}

export { ProductsProvider }
export default ProductsContext