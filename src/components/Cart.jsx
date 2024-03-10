import React, { useState,useContext } from 'react'
import './cart.css'
import { useEffect } from 'react'
import { cartContext } from '../App'

const Cart = () => {
  const [total,setTotal]=useState(0)
  const{cart}=useContext(cartContext)
  useEffect(()=>{
 setTotal(cart.reduce((acc,curr)=>acc + parseInt(curr.amt), 0))
  },[cart])
  console.log("cart render");
  return (
    <>
      <h1 className='cart-heading'>cart products</h1>
      <div className='cart-container'>
        {
        cart.map((product)=>(
          <div className='cart-product' key={product.id}>
          <div className='img'>
            <img src={product.image} alt='' />
          </div>
          <div className='cart-product-details'>
            <h3>{product.name}</h3>
            <p>price Rs:{product.amt}</p>
          </div>
        </div>
        ))
        }
      </div>
      <h2 className='cart-amt'> Total Amount Rs: {total}</h2>
    </>
  )
}

export default Cart