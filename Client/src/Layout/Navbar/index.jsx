import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import './index.scss'
const Navbar = () => {
  return (
    <div>

        <div className="Navbar">
            <div className="ImgNav">
                <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="MainNavbar">
                <ul className='NavMain'>
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/services'}>Services</NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    <li><NavLink to={'/add'}>Add Page</NavLink></li>
                   <li><NavLink to={'/wishlist'}><FaHeart /></NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar