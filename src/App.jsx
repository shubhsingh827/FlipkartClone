import React, { createContext, useState } from 'react'
import Navbar from './component/Navbar';
import './App.css';
import Clous from './component/Clous';
import Footer from './component/Footer';
import Products from './component/Products';
export const Product = createContext(false, ()=>{});

const App =  () => {
  const [togglePro, setTogglePro] = useState(false);
  return (
    <>
    <Product.Provider value={[togglePro, setTogglePro]}>
    <Navbar/>
    <Products/>
    </Product.Provider>
    <Clous />
    <Footer />
    </>
  )
}

export default App;