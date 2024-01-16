import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import './index.scss'
const Wishlist = () => {
    const { wish, deleteWish } = useContext(WishlistContext)
    return (
        <div>
            <h1>Wishlist</h1>
            {
                wish && wish.map(x =>
                    <ul className='wish'>
                        <li><img src={x.image} alt="" /></li>
                        <li>{x.text}</li>
                        <li>{x.title}</li>
                        <li><button className ='button'onClick={() => deleteWish(x)}>Delete</button></li>
                    </ul>
                )
            }

        </div>
    )
}

export default Wishlist