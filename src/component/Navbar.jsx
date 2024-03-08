import React, { useContext, useState } from 'react';
import { Product } from '../App';
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const handleNavShowToggle = () =>{
    setToggleNav(!toggleNav);
  }

  const protgl = useContext(Product);
  const [,setTogglePro] = protgl;
  const [togglePro] = protgl;
  const handleProShowToggle = () =>{
    setTogglePro(!togglePro);
  }


  return (
    <>
    <div className=" yn">
    <img  src='https://i.pinimg.com/736x/57/55/b1/5755b1f4d9246e6d3a39c7ede0a692de.jpg' id='product' alt='product' onClick={handleNavShowToggle} className='h-8'/>
      <div className="text-white text-lg font-bold ml-3 w-20 justify-start">
            <img src="https://asset.brandfetch.io/idWdImNSUt/idgdmSMilx.png" alt="flipkart-logo" />
          </div>
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2rW52CGC3kNhsmGxgzV-IVR3rmlvFgCBzCHf4qI2Xg&s' id='product' alt='product' onClick={handleProShowToggle} className='h-8'/>

    </div>
      <nav className='nn bg-gray-800 p-4 h-15 justify-between'>
        <div className="container mx-auto justify-between items-center tot-nav">

          <div className="text-white text-lg font-bold ml-3 w-20 justify-start nav-lg">
            <img src="https://asset.brandfetch.io/idWdImNSUt/idgdmSMilx.png" alt="flipkart-logo" />
          </div>

          <ul className={`space-x-4 justify-end ${toggleNav ? 'nav-side-list' : 'nav-side-list-show'}`}>
          <input className="search "type="search" name="search" id="search" placeholder='Search for Products brand and more' />
            <div className="human  w-7">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="human" />
            </div>
            <li><a href="/" className="text-white">Login</a></li>
            <div className='cart w-7'>
              <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg" alt="cart" />
            </div>
            <li><a href="/about" className="text-white">Cart</a></li>
            <div className='Sellor w-7 '>
              <img src="https://i.pinimg.com/736x/01/29/c8/0129c851f359475d239c4a5edcb0301c.jpg" alt="sellor" style={{ color: 'black' }}/>
            </div>
            <li><a href="/products" className="text-white">Becomes seller</a></li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Navbar