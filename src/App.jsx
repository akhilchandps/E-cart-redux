
import './App.css'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Haeder from './Components/Header'
import Home from './Components/Home'
import PageNotfound from './Components/PageNotfound'
import Wishlist from './Components/Wishlist'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>

    <Haeder/> 
    <Routes>
  <Route path= {''} element={<Home/>}/>
  <Route path= {'cart'} element={<Cart />}/>
  <Route path= {'wishlist'} element={<Wishlist/>}/>
  <Route path= {'projects'} element={<PageNotfound/>}/>
      </Routes>  
      <Footer/>
    </>


  )
}

export default App
