import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './index.scss'
import { WishlistContext } from '../../../context/WishlistContext';
import { Link } from 'react-router-dom';
const Card = ({id,text,title,image,product}) => {
const {addWish}=useContext(WishlistContext)
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
                <li><Link to={`/${id}`}> <FaEye className='eye' /></Link> </li>
               <li onClick={()=>addWish(product)}> <FaHeart className='heart' /></li> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card