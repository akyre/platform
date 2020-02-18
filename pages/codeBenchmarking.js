import React from 'react'
import Nav from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'
import InfoBox from '../components/infobox'

const CodeBenchmarking = () => {
  return (
    <div>
      <Head>
        <title>Code benchmarking</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Nav pageName="Code Benchmarking"/>
      <div id="box">
        <InfoBox title="Présentation" content="Le service de benchmark de code a pour vocation de fournir une vision étendue des performances de son code. Nous fournissons des données en temps réel sur la vitesse d'exécution de votre code avec pour principal objectif l'identification des faiblesses de votre architecture. Ces analyses constituent une base solide dans l'obtention d'indicateurs clés de votre projet pouvant être sublimés (ou couplés) par l'utilisation du service d'analyse de code."/>
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

export default withApollo(CodeBenchmarking)