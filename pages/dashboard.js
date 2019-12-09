import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import InfoBox from '../components/infobox'
import Footer from '../components/footer'
import TextField from '../components/text-field'
import MeetingsList from '../components/meeting-list'
import History from '../components/history'

const PersonalInfo = ({ user }) => (
  <div id="content">
    <div id='image'></div>
    <p>{user.name}</p>
    <style jsx>{`
      #content {
        align-self: start;
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
        border-color: #1aa7ff;
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

const Settings = () => {
  return (
    <div id='content'>
      <div>Billing</div>
      <div>Billing</div>
      <div>Billing</div>
      <div>Billing</div>
      <div>Billing</div>
      <div>Billing</div>
      <style jsx>{`
        #content {
          color: #000;
          background: #fff;
          box-shadow: 0px 0px 15px #00000029;
          padding: 20px;
          width: 90%;
          border-radius: 25px;
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}

const Dashboard = () => (
  <div>
    <Nav name="Home" user={{ name: 'roger' }} />
    <div id='content'>
      <PersonalInfo user={{ image: 'https://picsum.photos/200', name: 'Alexandre Fourcat' }} />
      <div id='range-1'>
        <MeetingsList meetings={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        <Settings />
      </div>
      <History history={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
    </div>
    <Footer />
    <style jsx>{`
      #range-1 {
        display: flex;
        width: 90%;
      }

      #content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
)

Dashboard.getInitialProps = () => {
  return {}
}

export default Dashboard
