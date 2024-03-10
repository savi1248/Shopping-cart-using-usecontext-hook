import React from 'react'
import './product.css'
import { useContext } from 'react';
import { cartContext } from '../App';

const Product = ({product}) => {
  const{cart,setCart}=useContext(cartContext)
  
  const name=product.name.length>15 ? product.name.substring(0,20) + '..' 
  : product.name;
  const  addcart =()=>{
     setCart([...cart,product])
  }
  const  removecart =()=>{
    setCart(cart.filter((c) => c.id!==product.id))
  }
  return (
    <div  className='product'>
      <div className='img'>
        <img src={product.image} alt={product.name}/>
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p>Price Rs.{product.amt}</p>
       {
        cart.includes(product)? (
            <button className='btnremove' onClick={removecart}>remove cart</button> 
           ):(

            <button onClick={addcart}>Add from cart</button>
          )

        
       }
        </div>  
    </div>
  )
}

export default Product 