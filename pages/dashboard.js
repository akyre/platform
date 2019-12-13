import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import MeetingList from '../components/meeting-list'
import History from '../components/history'
import Button from '../components/button'
import redirect from '../lib/redirect'
import checkLogged from '../lib/checkLogged'
import { withApollo } from '../lib/apollo'

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
          <p> {user.name}</p>
        </span>
        <span className='label-data'>
          <label>Pseudo: </label>
          <p> {user.surname}</p>
        </span>
        <span className='label-data'>
          <label>Phone: </label>
          <p> {user.phone}</p>
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

const Dashboard = ({ loggedInUser }) => {
    return (
    <div>
        <Nav pageName="Dashboard" user={{ name: loggedInUser.user.email }} />
        <div id='content'>
        <PersonalInfo user={{ image: 'https://picsum.photos/200', name: loggedInUser.user.name }} />
        <div id='range-1'>
            <MeetingList meetings={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            <Settings user={loggedInUser.user} />
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
  );
}

Dashboard.getInitialProps = async (context) => {
  const { loggedInUser } = await checkLogged(context.apolloClient);

  if (!loggedInUser.user) {
    redirect({}, '/login');
  }
  return { loggedInUser }
}

export default withApollo(Dashboard)
