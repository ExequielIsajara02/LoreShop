import React, {useState, useEffect} from "react";
import './CategoriesContainer.css'
import { Link } from "react-router-dom";
import db from '../../firebase'
import {collection, getDocs } from 'firebase/firestore';
import images from "../../assets/images";


const CategoriesContainer = () => {


    const [categories, setCategories] = useState([]);


    async function getItemsCategory(db) {
        const categoriesCol = collection(db, 'category-products');
        const categoriesSnapshot = await getDocs(categoriesCol);
        const categoriesList = categoriesSnapshot.docs.map(doc => {
            let categories = doc.data();
            categories.id = doc.id;
            return categories
        });
        return categoriesList;
    }
    

    // Se montara y actualizaran los datos del o los componentes
    useEffect(() => {
        getItemsCategory(db).then((result) => {
            setCategories(result)
        })
    }, [])



    return (
        <div>
            {categories.map((category) => {
                return (
                    <Link to={`/category/${category.category}`} style={{'textDecoration': 'none'}} key={category.id}>
                        <div className="category-container">
                            <p className="category-text" style={{'textTransform': 'uppercase'}}>{category.category}</p>
                            <img src={images[category.pictureUrl]} className="category-img" alt={category.title}/>
                        </div>  
                    </Link>
                    
                );
            })}
        </div>
    );


}

export default CategoriesContainer