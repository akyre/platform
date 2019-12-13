import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'
import InfoBox from '../components/infobox'

const PeerCoding = () => {
  return (
    <div>
      <Nav pageName="Peer Coding"/>
      <div id="box">
        <InfoBox title="Présentation" content="La fonctionnalité de peer coding a été conçue afin de de vous aider dans le développement de votre projet. Il peut être nécessaire de travailler à plusieurs sur une partie complexe de son projet et ainsi de déléguer des parcelles de son travail à l'expert le plus compétent."/>
      </div>
      <Footer />
      <style jsx>{`
        p {
            color: black;
            text-align: center;
        }

        #box {
          margin-top: 30px;
          margin-bottom: 30px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          color: black;
        }
      `}</style>
    </div>
  )
}

export default withApollo(PeerCoding)