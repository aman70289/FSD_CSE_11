import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">My Cart</NavLink>
      <NavLink to="/orders">My Orders</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  )
}

export default Navbar