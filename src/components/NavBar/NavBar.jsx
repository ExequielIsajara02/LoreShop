import React, {useState} from 'react';
import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import images from '../../assets/images';
import {Container, Wrapper, MobileIcon, LogoContainer, Menu, MenuItem} from './NavbarElements'




const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (


        <Container>
            <Wrapper>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <img src={images.menu} className='img-icon' alt='icon'/>
                </MobileIcon>


                <LogoContainer>
                    <Link to={'/'} style={{textDecoration: 'none'}}><h3 className="title">Lore's Shop</h3></Link>
                </LogoContainer>

                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <Link to={'/'} style={{'textDecoration' : 'none'}} className='btn-link'>
                            <Button className='btn-nav' variant='text'>Home</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to={'/category'} style={{'textDecoration' : 'none'}} className='btn-link'>
                            <Button className='btn-nav' variant='text'>Category</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to={'/contact'} style={{'textDecoration' : 'none'}} className='btn-link'>
                            <Button className='btn-nav' variant='text'>Contact</Button>
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to={'/about'} style={{'textDecoration' : 'none'}} className='btn-link'>
                            <Button className='btn-nav' variant='text'>About Us</Button>
                        </Link>
                    </MenuItem>
                </Menu>
                <CartWidget/>
            </Wrapper>
            
        </Container>





        /*
        <div>
            <nav>


                <span className='btn-menu' onClick={handleChange}>
                    <img src={images.menu} />
                </span>
                <Link to={'/'} style={{textDecoration: 'none'}}><h3 className="title">Lore's Shop</h3></Link>
                <div className='content-list show'>
                    <Link to={'/'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Home</Button>
                    </Link>

                    
                    <Link to={'/category'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Category</Button>
                    </Link>

                
                    <Link to={'/contact'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">Contact</Button>
                    </Link>
                    

                    <Link to={'/about'} style={{'textDecoration' : 'none'}}>
                        <Button href="#text-buttons" variant="text" className="btn-nav">About us</Button>
                    </Link>
                </div>
                <CartWidget/>
            </nav>
        </div> */
    )
}

export default NavBar