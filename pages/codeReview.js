import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const CodeReview = () => {
  return (
    <div>
      <Nav pageName="Code Review"/>
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

export default CodeReview