import { useState } from 'react'
import './App.css'
import Main from './Layout/MainLayout'
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Services from './Pages/ServicesPage'
import Case from './Pages/CaseStudyPage'
import Blog from './Pages/BlogPage'
import Contact from './Pages/ContactPage'
import {Routes,Route} from 'react-router-dom'
import Add from './Pages/AddPage'
import Wishlist from './Pages/WishlistPage'
import Detail from './Pages/DetailPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />}>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/services"} element={<Services />}></Route>
          <Route path={"/case"} element={<Case />}></Route>
          <Route path={"/blog"} element={<Blog />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/add"} element={<Add />}></Route>
          <Route path={"/wishlist"} element={<Wishlist />}></Route>
          <Route path={'/:id'} element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
