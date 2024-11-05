import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Ecommerce_Frontend_Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png'
import pinterest_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>ABout</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
                <img src={pinterest_icon} alt="" />
                <img src={whatsapp_icon} alt="" />

            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 Alll Rights Reserved!</p>
        </div>
      
    </div>
  )
}

export default Footer
