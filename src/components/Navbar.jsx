import React from 'react'
import { Link } from 'react-router'
import {styled} from 'styled-components'
import { useCart } from '../Context/Cartcontext'

const Nav = styled.nav`
  width: 100%;
  background: #282c34;
  padding: 0.6rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`

const Brand = styled.h1`
  font-size: 1.1rem;
  margin: 0;
` 

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`

function Navbar() {
    const { cartItems } = useCart();
  return (
    <Nav>
      <Brand>MyMeals</Brand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
