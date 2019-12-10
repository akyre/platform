import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import InfoBox from '../components/infobox'
import Footer from '../components/footer'
import InfoCard from '../components/infoCard'
import TextField from '../components/text-field'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav name="Home" user={{ name: 'roger' }} />
    <InfoCard/>
    <div className="hero">
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <InfoBox title={'Test'} content={'Bonjour 123'} p={2} m={2} button={'more'} />
      <form>
        <TextField label={'username'} placeholder='email@mail.fr' />
        <TextField label={'password'} type='password' placeholder='password' />
        <TextField label placeholder='Flux' />
        <TextField label={'flix'} />
      </form>
    </div>
    <Footer />
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
