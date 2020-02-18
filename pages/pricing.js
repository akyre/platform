import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { withApollo } from '../lib/apollo'

const Pricing = () => {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Nav pageName="Pricing"/>
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

export default withApollo(Pricing)