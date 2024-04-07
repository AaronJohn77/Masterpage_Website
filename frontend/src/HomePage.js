import React from 'react'
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/product_page">product_page</Link></li>
          <li><Link to="/CartPage">CartPage</Link></li>
        </ul>
      </nav>
    </>

  )
}

export default HomePage