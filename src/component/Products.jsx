import React, { useContext } from 'react';
import gp from '../assets/gimg.jpg';
import { Product } from '../App';

const Products = () => {
    const [togglePro] = useContext(Product);

    return (
        <>
            <div className={`justify-around mt-2 ${togglePro ? 'p' : 'np'}`}>
                <div className='cont'>
                    <img className='w-10' src={gp} alt="grocery" />
                    Grocery
                    <div className="hidden-element flex">
                        <p>Shoes & Shocks <br /> Bread & butter
                            <br /> Snacks <br /> Eggs <br /> Backery Products
                            <br />Meat & Seafood <br />Dairy<br /> Cereal
                            <br /> Dry Fruits
                        </p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'></img>
                    Mobiles
                    <div className="hidden-element flex">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem neque, ea id eveniet corporis facilis impedit voluptates rem. Debitis adipisci placeat voluptate ea aut?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem neque, ea id eveniet corporis facilis impedit voluptates rem. Debitis adipisci placeat voluptate ea aut?</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://media.istockphoto.com/id/1131097418/photo/beautiful-woman-with-shopping-bags-in-the-city-sale-shopping-tourism-and-happy-people-concept.jpg?s=2048x2048&w=is&k=20&c=fW20uyROXc6tWhg5QJJ214L1tfPbeJDA-4M7fhOUmkw=' alt='img'></img>
                    Fashion
                    <div className="hidden-element flex">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita voluptas amet natus quia, hic at voluptatibus ullam dolorem voluptatem, totam quibusdam unde molestias quae?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem neque, ea id eveniet corporis facilis impedit voluptates rem. Debitis adipisci placeat voluptate ea aut?</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D' alt='img'></img>
                    Electronics
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nobis doloribus provident molestias sunt debitis deserunt, minima, corrupti culpa a, inventore voluptates iure at quisquam?</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'></img>
                    Home & <br /> Furniture
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat nesciunt quae tempora minus esse? Ipsa voluptates assumenda reprehenderit iusto natus, sapiente vitae laborum qui.</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGlhbmNlc3xlbnwwfHwwfHx8MA%3D%3D' alt='img'></img>
                    Appliances
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora officia sit corrupti ut harum. Sapiente quisquam cupiditate tenetur ipsam inventore, iste ex? Aliquam, quas?</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhdmVsfGVufDB8fDB8fHww' alt='img'></img>
                    Travel
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorem unde mollitia, optio iure voluptatem voluptate reprehenderit deserunt fugiat rem temporibus, tenetur numquam iste pariatur.</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'></img>
                    Beauty Toys <br /> & More
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda aliquam, harum quod optio necessitatibus earum alias dolores corporis ut nemo fugit, inventore vero odio!</p>
                    </div>
                </div>
                <div className='cont'>
                    <img className='w-10' src='https://media.istockphoto.com/id/104508200/photo/white-horses.webp?b=1&s=170667a&w=0&k=20&c=1b4B_F6J91-vtsaVBijgkcTZ--UUWfIsMC73G-WXpVo=' alt='img'></img>
                    Two Wheeler
                    <div className="hidden-element">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sequi consequuntur illum architecto, voluptates nesciunt eveniet, fugit eaque impedit dolor vitae velit corrupti, ipsam libero saepe officia. Voluptatum, optio cumque!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products