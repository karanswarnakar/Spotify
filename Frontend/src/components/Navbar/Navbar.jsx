import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <div className="right">
        <i class="ri-arrow-left-s-line"></i>
        <i class="ri-arrow-right-s-line"></i>
      </div>
      <div className="middle">
        <i class="ri-home-2-fill" id='home'></i>
        <div className="search">
          <i class="ri-search-line"></i>
          <input type="taxt" name="search" id="search" placeholder='What do you want to play?' />
          <span class="divider"></span>
          <i class="ri-archive-stack-line"></i>
        </div>
      </div>
      <div className="left">
        <i class="ri-notification-2-line"></i>
        <i class="ri-team-line"></i>
        <button className="login">K</button>
      </div>
    </nav>
  )
}

export default Navbar
