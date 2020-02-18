import React from 'react'
import Nav from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'
import InfoBox from '../components/infobox'

const CodeAnalytics = () => {
  return (
    <div>
      <Head>
        <title>Code analytics</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Nav pageName="Code Analytics"/>
      <div id="box">
        <InfoBox title="Présentation" content="L'analyse de votre projet vise à vous fournir un récapitulatif des améliorations pouvant être apportées à votre projet. Ces améliorations se basent sur les bonnes pratiques de programmation identifiées par notre intelligence artificielle et ont pour but de rendre votre code plus lisible, maintenable et modulable.
"/>
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

export default withApollo(CodeAnalytics)