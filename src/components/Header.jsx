import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
 const Header = ({cart}) => {
    return (
        <div className='navbar'>
            <div className='logo'>Food cart</div>
            <ul>
                <li> <Link to='/'>home</Link></li>
           
                <li><Link to="/cart"><span className='cart-count'>{cart.length}</span>view cart</Link></li>
            </ul>
        </div>
    )
}
export default Header

