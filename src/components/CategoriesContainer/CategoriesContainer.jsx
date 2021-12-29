import React, {useState, useEffect} from "react";
import './CategoriesContainer.css'
import { Link } from "react-router-dom";


const CategoriesContainer = () => {


    const [characters, setCharacters] = useState([]);


    

    const getPromise = async () => {
        const request = await fetch('https://mocki.io/v1/0eadb388-c601-4bbd-a638-34a4ec75330e');
        const data = await request.json();

        console.log(data);
        setCharacters(data);
    };

    useEffect(() => {
        getPromise();
    }, []);

    return (
        <div>
            {characters.map((character) => {
                return (
                    <Link to={`/category/${character.id}`} style={{'textDecoration': 'none'}}>
                        <div key={character.id} className="category-container">
                            <p className="category-text">{character.category}</p>
                            <img src={character.pictureUrl} className="category-img"/>
                        </div>  
                    </Link>
                    
                );
            })}
        </div>
    );


}

export default CategoriesContainer