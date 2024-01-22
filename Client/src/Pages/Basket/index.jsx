import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const BasketPage = () => {
    const { basket, deleteBasket, decreaseBasket, increaseBasket } = useContext(BasketContext)
    return (
        <>
            <h1>Basket</h1>
            <div className="BasketArea">
                {basket && basket.map(x =>
                    <ul>
                        <li><img src={x.image} alt="" /></li>
                        <li>{x.text}</li>
                        <li>{x.title}</li>
                        <li><button onClick={() => deleteBasket(x)}>delete</button></li>
                        <li><button onClick={() => increaseBasket(x)}>+</button></li>
                        <p>{x.count}</p>
                        <li><button onClick={() => decreaseBasket(x)}>-</button></li>
                    </ul>

                )}
            </div>
        </>
    )
}

export default BasketPage