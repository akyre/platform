import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const CodeBenchmarking = () => {
  return (
    <div>
      <Nav pageName="Code Benchmarking"/>
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

export default CodeBenchmarking