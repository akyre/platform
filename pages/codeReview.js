import React from 'react'
import Nav from '../components/nav'
import Head from 'next/head'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'
import InfoBox from '../components/infobox'

const CodeReview = () => {
  return (
    <div>
      <Head>
        <title>Code review</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Nav pageName="Code Review"/>
      <div id="box">
        <InfoBox title="Présentation" content="Le service de code-review vous permet d’obtenir des conseils personnalisés et accessibles sur vos projets de développement. Ce service garantit une mise en relation rapide avec l’un de nos experts qui pourra ainsi vous conseiller et vous accompagner dans votre projet. Ces nombreux experts garantissent un large éventail de choix en matière de technologies et une communauté importante pouvant répondre à vos interrogations. Avec un processus de réservation de créneaux et de choix d’experts, vous pouvez désormais passer le temps que vous souhaitez afin d’optimiser votre temps et faciliter votre apprentissage."/>
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

export default withApollo(CodeReview)