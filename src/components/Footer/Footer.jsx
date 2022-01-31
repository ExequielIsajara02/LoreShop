import React from 'react';
import './Footer.css'
import images from '../../assets/images';

const Footer = () => {
    return (
        <div className='container-footer'>
            
            <div className='footer'>
                <div className='social-media'>
                    <h3>Contactos:</h3>
                    <div className='social-media__item'>
                        <a href='https://www.instagram.com/animate3002/'>
                            <img src={images.instagram} className='social-media__img' alt='instagram-icon'/>
                            <p>Animate3002</p>
                        </a>
                    </div>
                    <div className='social-media__item'>
                        <a href='https://www.facebook.com/profile.php?id=100077743024238'>
                            <img src={images.facebook} className='social-media__img' alt='facebook-icon'/>
                            <p>Animate place</p>
                        </a>
                    </div>
                    <div className='social-media__item'>
                        <img src={images.whatsapp} className='social-media__img' alt='whatsapp-icon'/>
                        <p>3425987331</p>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Lore's Shop 2022 E-commerce</p>
                    <p>Todos los derechos reservados. Ninguna parte de esta web o de su contenido 
                        puede reproducirse sin el permiso expreso del propietario del copyright.
                    </p>
                </div>
            </div>
        </div>
    )
    
  
};

export default Footer;
