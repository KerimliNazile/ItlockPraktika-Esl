import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
const Detail = () => {
    const [detail, setdetail] = useState()
    const { id } = useParams()
    const fetchdetail = async () => {
        const res = await fetch(`http://localhost:5000/modes/${id}`)
        const json = await res.json()
        setdetail(json)
    }
    useEffect(() => {
        fetchdetail()
    }, [])
    return (
        <>
            <div className="DetailArea">
                {detail ? <>

                    <div className="Detail">
                        <img src={detail.image} alt="" />
                        <h1>{detail.text}</h1>
                        <h3>{detail.title}</h3>
                    </div>
                </> : ''}
            </div>


        </>
    )
}

export default Detail