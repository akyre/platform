import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Register = () => {
  return (
    <div>
      <Nav pageName="Register"/>
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

export default Register