import React from 'react';
import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <div>
            <nav className="container-nav">

                <Link to={'/'} style={{textDecoration: 'none'}}><h3 className="title">Lore's Shop</h3></Link>

                <ul className="content-list">
                    <li>
                        <Button href="#text-buttons" variant="text" className="btn-nav">
                            <Link to={'/'} className='btn-text'>Home</Link>
                        </Button>
                    </li>

                    <li>
                        <Button href="#text-buttons" variant="text" className="btn-nav">
                            <Link to={'/category'} className='btn-text'>Category</Link>
                        </Button>
                    </li>

                    <li>
                        <Button href="#text-buttons" variant="text" className="btn-nav">
                            <Link to={'/contact'} className='btn-text'>Contact</Link>
                        </Button>
                    </li>

                    <li>
                        <Button href="#text-buttons" variant="text" className="btn-nav">
                            <Link to={'/about'} className='btn-text'>About Us</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar