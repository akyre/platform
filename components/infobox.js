import React from 'react'
import Button from './button'

const links = [
  { href: '/dashboard', label: 'Tableau de bord' },
  { href: '/main-page', label: 'Choix de l\'expert' },
  { href: '/settings', label: 'Parametre' },
  { href: '/history', label: 'Historique' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const InfoBox = ({ title, content, button, m = 1, p = 1 }) => (
  <div id="main" style={{
    margin: {m},
    padding: {m}
  }}>
    <h2>{title}</h2>
    <p>{content}</p>
    {button &&
      <Button>{button}</Button>
    }
    <style jsx>{`
    #main {
      box-shadow: 0px 3px 6px #00000029;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: ${m * 10}px;
      padding: ${p * 10}px;
    }
    h2 {
      padding: 0;
      margin: 0;
      align-self: start;
    }
    `}</style>
  </div>
)

export default InfoBox
