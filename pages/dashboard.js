import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import InfoBox from '../components/infobox'
import Footer from '../components/footer'
import TextField from '../components/text-field'
import MeetingList from '../components/meeting-list'
import History from '../components/history'
import Button from '../components/button'

const PersonalInfo = ({ user }) => (
  <div id="content">
    <div id='image'></div>
    <p>{user.name}</p>
    <style jsx>{`
      #content {
        align-self: start;
        display: flex;
        align-items: center;
        margin-left: 5%;
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

const Settings = ({ user }) => {
  return (
    <div id='content'>
      <div id='title'>Informations</div>
      <div id='conteneur'>
        <h2>Information personelle</h2>
        <span className='label-data'>
          <label>Email: </label>
          <p> {user.email}</p>
        </span>
        <span className='label-data'>
          <label>Name: </label>
          <p> {user.email}</p>
        </span>
        <span className='label-data'>
          <label>Pseudo: </label>
          <p> {user.email}</p>
        </span>
        <span className='label-data'>
          <label>Phone: </label>
          <p> {user.email}</p>
        </span>
        <h2>Information de paiement</h2>
        <span className='label-data'>
          <label>Numero de carte: </label>
          <p> 8329-****-****-****-**23</p>
        </span>
        <span className='label-data'>
          <label>Credit: </label>
          <span className='billing'>
            <p> 💵 123$</p>
            <Button height='100px' p={0}>
              Retirer ses credits
            </Button>
          </span>
        </span>
      </div>
      <style jsx>{`
        .billing {
          display: inline-flex;
        }

        .label-data {
          display: flex;
          align-items: center;
        }

        label {
          font-size: 20px;
        }

        h2 {
          text-decoration: underline;
        }
  
        .billing {
          display: flex;
          justify-content: space-between;
        }

        #title {
          color: #000;
          font-weight: bold;
          font-size: 40px;
        }
        
        #conteneur {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        
        p {
          margin-left: 10px;
          font-weight: lighter;
          font-size: 25px;
        }
  
        #content {
          color: #000;
          background: #fff;
          box-shadow: 0px 0px 15px #00000029;
          padding: 20px;
          width: 100%;
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
        <MeetingList meetings={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        <Settings user={{ email: 'alexandre.fourcat@epitech.eu' }} />
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
