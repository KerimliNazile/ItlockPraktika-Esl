import React from 'react'
import Products from '../../Components/HomeComp/Products'
import Header from '../../Components/HomeComp/Header'
import Managed from '../../Components/HomeComp/Managed'
import Protifably from '../../Components/HomeComp/Protifably'

const Home = () => {
  return (
    <div>
        <Header/>
        <Managed/>
        <Protifably/>
        <Products/>

    </div>
  )
}

export default Home