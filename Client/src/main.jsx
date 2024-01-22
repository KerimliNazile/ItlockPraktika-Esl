import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from './context/WishlistContext.jsx'
import BasketProvider from './context/BasketContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <BasketProvider>
            <WishlistProvider>
                
                <App />
            </WishlistProvider>

        </BasketProvider>

    </BrowserRouter>





)
