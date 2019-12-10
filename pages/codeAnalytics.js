import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const CodeAnalytics = () => {
  return (
    <div>
      <Nav pageName="Code Analytics"/>
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

export default CodeAnalytics