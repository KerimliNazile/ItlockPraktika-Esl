import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Products = () => {
    const [product, setProduct] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:5000/modes")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <section id='Product'>
                <div className="ProductArea">
                    <div className="ProductText">
                        <p>OUR CASE STUDY</p>
                        <h1>We work with global brands</h1>
                    </div>
                    <div className="CardAreas">
                        {product && product.map((item) => (
                        <div className="CardBox">
                            <Card key={item._id} id={item._id} text={item.text} title={item.title} image={item.image} product={item} />
                        </div>

                    ))
                    }
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Products