import React, { useState } from 'react'
import "./Navbar.css"
import Tooltip from '../Custome/Tooltip'
import AccountList from './AccountList'




const Navbar = () => {

  const [Acount, setAcount] = useState(false)
  const [text, setText] = useState("Account")
  return (
    <nav>
      <div className="right">
        <span> <Tooltip content={<i className="ri-arrow-left-s-line"></i>} overlya="Go Back" /></span>
        <span>  <Tooltip content={<i className="ri-arrow-right-s-line"></i>} overlya="Go forword" /></span>


      </div>
      <div className="middle">
        <Tooltip content={<i className="ri-home-2-fill" id="home"></i>} overlya="Home" />
        <div className="search">
          <Tooltip content={<i className="ri-search-line"></i>} overlya="Search" />

          <input type="taxt" name="search" id="search" placeholder='What do you want to play?' />

          <div className="shortcut-key">
            <span>Ctrl</span>
            <span>L</span>
          </div>

          <span className="divider"></span>

          <Tooltip content={<i className="ri-archive-stack-line"></i>} overlya="Browse" />
        </div>
      </div>
      <div className="left">

        <Tooltip content={<i className="ri-notification-2-line"></i>} overlya="Whatt's New" />

        <Tooltip content={<i className="ri-team-line"></i>} overlya="Listening activity" />

        <ul className='account-contaner'>
          <li
          onClick={()=>{
            if (Acount == false){
              setAcount(true)
              setText(" ")
            }else{
              setAcount(false)
              setText("Account")
            }
          }}
          >
            <Tooltip content={<button className="login">K</button>} overlya={text}  />
           {Acount==true? <AccountList /> : " " } 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
