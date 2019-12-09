import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/dashboard', label: 'Products' },
  { href: '/main-page', label: 'Partners' },
  { href: '/settings', label: 'Community' },
  { href: '/history', label: 'Pricing' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ pageName, user }) => (
  <nav>
    <div id="main">
      <div id="nav-bar">
        <Link href="/">
          <img src="/logo-brain.png" id="logo"></img>
        </Link>
        <div id="text">
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <a className="field-nav" href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <ul id="connection">
            <li><a className="connect" id="sign-in" href="#">Sign in</a></li>
            <li><a className="connect" id="sign-up" href="#">Sign up</a></li>
          </ul>
        </div>
      </div>
      <div id="title">
        {user &&
          <div>
            <h4 id="main-title">Talk is cheap show me the code.</h4>
            <p id="sub-title">(cf. Linus Torvald)</p>
          </div> ||
          <h1>{pageName}</h1>
        }
      </div>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, Roboto, Avenir Next, Avenir, Helvetica, sans-serif;
        color: #fff;
      }

      #logo {
        padding: 20px;
        width: 100px;
        height: 100px;
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
        font-size: 50px;
      }

      h4 {
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
   `}</style>
  </nav>
)

export default Nav
