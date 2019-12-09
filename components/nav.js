import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/dashboard', label: 'Tableau de bord' },
  { href: '/main-page', label: 'Choix de l\'expert' },
  { href: '/settings', label: 'Parametre' },
  { href: '/history', label: 'Historique' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = ({ pageName, user }) => (
  <nav>
    <div id="main">
      <Link href="/">
        <img src="/logo-brain.png" id="logo"></img>
      </Link>
      <div id="text">
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        {user &&
          <h4>Talk is cheap show me the code.</h4> ||
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
      #text {
        width: 100%;
      }
      #main {
        display: flex;
        padding: 10px;
        box-shadow: 0px 3px 6px #00000029;
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
        justify-content: space-between;
        flex-grow: 1;
      }

      .nav-bar {
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        margin-left: 20px;
        margin-right: 20px;
      }
      a:hover {
        text-decoration: underline;
      }
   `}</style>
  </nav>
)

export default Nav
