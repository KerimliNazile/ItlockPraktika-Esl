import React, { createContext } from 'react'
import useLocalStoge from '../hooks/useLocalStoge'
export const WishlistContext = createContext()
const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useLocalStoge("wishlist")
    //Add
    function addWish(product) {
        const existWish = wish.findIndex(x => x._id === product._id)
        if (existWish === -1) {
            setWish([...wish, { ...product }])
        }
    }
    //Delete
    function deleteWish(product){
        const deletedWish= wish.filter(x=>x._id!==product._id)
        setWish(deletedWish)
    }
    const data={
        wish, setWish,addWish,deleteWish
    }
    return (
        <div>
            <WishlistContext.Provider value={data}>
                {children}
            </WishlistContext.Provider>

        </div>
    )
}

export default WishlistProvider