import React from 'react'
import Link from 'next/link'
import Account from '../components/account'
import { useApolloClient } from '@apollo/react-hooks'
import cookie from 'cookie'
import redirect from '../lib/redirect'

const links = [
  { href: '#', label: 'Products', sublinks: [
    { href: '/codeReview', label: 'Code Review'},
    { href: '/peerCoding', label: 'Peer Coding'},
    { href: '/codeBenchmarking', label: 'Code Benchmarking'},
    { href: '/codeAnalytics', label: 'Code Analytics'},
  ]},
  { href: '/expert', label: 'Experts', sublinks: [] },
  { href: '/community', label: 'Community', sublinks: [] },
  { href: '/pricing', label: 'Pricing', sublinks: [] },
]

const Nav = ({ pageName, user }) => {
  const client = useApolloClient();

  const signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1,
    })
    client.cache.reset().then(() => {
      redirect({}, '/');
    })
  }

  return (
  <nav>
    <div id="main">
      <div id="nav-bar">
        <Link href="/">
          <img src="/logo.svg" id="logo"></img>
        </Link>
        <div id="text">
          <ul>
            {links.map(function (elem) {
              if (elem.sublinks == 0) {
                return (
                  <li key={'nav-list' + elem.label + elem.href}>
                    <a className="field-nav" href={elem.href}>{elem.label}</a>
                  </li>
                )
              } else {
                return (
                <li key={'nav-list' + elem.label + elem.href} className="dropdown">
                  <button className="drop-btn">{elem.label}</button>
                  <div className="dropdown-content"> {
                    elem.sublinks.map(elem => (
                      <a key={'nav-link' + elem.label + elem.href} href={elem.href}>{elem.label}</a>
                    ))
                  }
                  </div>
                </li>
                )
              }
            })}
          </ul>
          {!user &&
            <ul id="connection">
              <li><a className="connect" id="sign-in" href="/login">Sign in</a></li>
              <li><a className="connect" id="sign-up" href="/register">Sign up</a></li>
            </ul> ||
            <Account username={user} signout={signout}/>
          }
        </div>
      </div>
      <div id="title">
        {!pageName &&
          <div>
            <h4 id="main-title">Talk is cheap show me the code.</h4>
            <p id="sub-title">(cf. Linus Torvald)</p>
          </div> ||
          <h1>{pageName}</h1>
        }
      </div>
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

      :global(body) {
        margin: 0;
        font-family: -apple-system, Roboto, Avenir Next, Avenir, Helvetica, sans-serif;
        color: #fff;
      }

      #logo {
        padding: 20px;
        width: 300px;
        height: 90px;
      }

      #main {
        display: flex;
        flex-direction: column;
        padding: 10px;
        box-shadow: 0px 3px 6px #00000029;
      }

      #nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 5%;
      }

      #text {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
      }

      #connection {
        width: 15%;
        padding-left: 0%;
        justify-content: space-around;
      }

      .connect {
        width: 100px;
        height: 100%;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;

      }

      #sign-up {
        border-radius: 16px;
        border: 3px solid white;
      }

      #sign-up:hover {
        color: #1A95FF;
        background-color: white;
      }

      #sign-in:hover {
        text-decoration: underline;
      }

      h1 {
        font-family: Roboto;
        font-weight: 400;
        font-size: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      h4 {
        color: #91afff
        font-family: Roboto;
        font-style: italic;
        font-weight: 100;
        font-size: 40px;
        margin: 0px;
        padding: 40px;
      }

      nav {
        background-color: #1AA7FF;
        text-align: center;
      }

      ul {
        margin-bottom: 0px;
        margin-top: 0px;
        display: flex;
        list-style: none;
      }

      li {
        height: 40px;
      }

      .field-nav {
        color: #fff;
        text-decoration: none;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        margin-left: 20px;
        margin-right: 20px;
        height: 100%;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .field-nav:hover {
        text-decoration: underline;
      }

      #main-title {
        padding-top: 0%;
        padding-bottom: 0%;
      }

      #sub-title {
        margin-top: 0%;
        margin-left: 40%;
        font-weight: 100;
        font-style: italic;
      }

      .navbar a {
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      .dropdown {
        float: left;
        overflow: hidden;
      }

      .drop-btn {
        color: #91afff;
        text-decoration: none;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        margin-left: 20px;
        margin-right: 20px;
        height: 100%;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .drop-btn:hover {
        text-decoration: underline;
      }

      .dropdown .drop-btn {
        border: none;
        outline: none;
        color: white;
        background-color: inherit;
        font-family: inherit;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .dropdown:hover .dropbtn {
        background-color: red;
      }
   `}</style>
  </nav>
  );
}

export default Nav
