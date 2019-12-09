import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import InfoBox from '../components/infobox'
import Footer from '../components/footer'
import TextField from '../components/text-field'

const PersonalInfo = ({ user }) => (
  <div id="content">
    <div id='image'></div>
    <p>{user.name}</p>
    <style jsx>{`
      #content {
        display: flex;
        align-items: center;
      }
      p {
        margin-left: 20px;
        color: black;
        font-size: 50px;
      }
      #image {
        background-image: url("${user.image}");
        height: 100px;
        width: 100px;
        border-color: ##1aa7ff;
        border-size: 5px;
        border-style: solid;
        border-color: #1aa7ff;
        background-position: center center;
        background-size: cover;
        border-radius: 50px;
        background-repeat: no-repeat;
        margin: 20px;
      }
    `}</style>
  </div>
)

const Dashboard = () => (
  <div>
    <Nav name="Home" user={{ name: 'roger' }} />
    <div>
      <PersonalInfo user={{ image: 'https://picsum.photos/200', name: 'Alexandre Fourcat' }} />
      <div id='range-1'>
        <MeetingsList />
        <Settings />
      </div>
      <History />
    </div>
    <Footer />
    <style jsx>{`
    `}</style>
  </div>
)

Dashboard.getInitialProps = () => {
  return {}
}

export default Dashboard
