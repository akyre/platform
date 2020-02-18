import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'

const Community = () => {
  return (
    <div>
      <Head>
        <title>Communauté</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Nav pageName="Community"/>
      <p>This page is under construction...</p>
      <Footer />
      <style jsx>{`
        p {
            color: black;
            text-align: center;
        }
      `}</style>
    </div>
  )
}

export default withApollo(Community)