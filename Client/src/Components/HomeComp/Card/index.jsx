import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import './index.scss'
import { WishlistContext } from '../../../context/WishlistContext';
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../context/BasketContext';
const Card = ({id,text,title,image,product}) => {
const {addWish}=useContext(WishlistContext)
const {addBasket}=useContext(BasketContext)
  return (
    <div>

        <div className="CardArea">
            <div className="CardBox">
                
                <div className="CardContent">
                    <img src={image} alt="" />
                    <h1>{text}</h1>
                    <h3>{title}</h3>
                </div>
                <div className="CardIcon">
                  <li onClick={()=>addBasket(product)}><FaCartArrowDown /></li>
                <li><Link to={`/${id}`}> <FaEye className='eye' /></Link> </li>
               <li onClick={()=>addWish(product)}> <FaHeart className='heart' /></li> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card