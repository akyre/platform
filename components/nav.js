import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="image">
      <img src="logo-brain.svg"/>
    </div>
    <div className="nav-bar">
      <div className="content">
        <a href="#">Products</a>
        <a href="#">Partners</a>
        <a href="#">Community</a>
        <a href="#">Pricing</a>
      </div>
      <div className="content">
        <a href="#" className="signin">Sign in</a>
        <a href="#" className="signup">Sign up</a>
      </div>
    </div>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        background-color: #1A95FF;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-style: italic;
        height: 200px;
      }

      .nav-bar {
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
      }

      a {
        display: inline-block;
        padding: 6px 8px;
        list-style-type: none;
        font-size: 17px;
        text-decoration: none;
        text-align: center;
        color: white;
      }

      a:active {
        color: black;
      }

      .login-bar {
        display: flex;
      }

      .signin {
        background-color: #1A95FF;
        border: 0px solid white;
      }

      .signup {
        width: 100px;
        border-radius: 16px;
        border: 3px solid white;
        background-color: #1A95FF;
      }

      .signup:hover {
        background-color: white;
        color: #1A95FF;
        margin-left: auto;
        margin-right: auto
      }
      .image {
        display: inline-block;
        width: 90px;
        height: 90px;
      }

      img {
        width: 100%;
        height: 100%;
      }
   `}</style>
  </nav>
)

export default Nav
