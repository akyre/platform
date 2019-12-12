import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ExpertCard from '../components/expert_card'
import moment from 'moment'
import { withApollo } from '../lib/apollo'

const ExpertInfo = ({ user }) => (
  <div className='content'>
    <div className='expertImage' />
    <p>{user.username}</p>
    <style jsx>{`
            .content {
                display: flex;
                align-items: center;
            }

            p {
                font-size: 30px;
                font-family: Roboto;
                color: black;
            }

            .expertImage {
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
                margin: 40px;
                margin-left: 100px;
                margin-right: 25px;
            }
        `}</style>
  </div>
)

const Appointment = ({ date, hour, duration, taken, onClick }) => (
  <div className="appointment" onClick={onClick}>
    <span className='info'>
      <label>Date:</label>
      <div>{date}</div>
    </span>
    <span className='info'>
      <label>Hour:</label>
      <div>{hour}</div>
    </span>
    <span className='info'>
      <label>Duration:</label>
      <div>{duration}</div>
    </span>
    <style jsx>{`
    .info label {
      margin-right: 5px;
      font-weight: bold;
    }

    .info div {
      font-weight: lighter;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .appointment {
      font-size: 19px;
      justify-content: space-around;
      padding: 20px;
      display: flex;
      flex-direction: column;
      margin: 20px;
      border-radius: 25px;
      width: 200px;
      height: 200px;
      background-color: ${ taken ? '#df4e64' : '#1aa7ff' };
    }
    `}</style>
  </div>
)

const ExpertAppointments = ({ appointments }) => {
  const sendApointementRequest = (app) => {
    if (app.taken)
      alert("Cannot take an appointment already taken")
    else
      alert("Appointment sended.")
  }

  appointments.sort((a, b) => a.taken - b.taken)
  return (
    <div className='card'>
      <div className='title'>
        Rendez vous
      </div>
      <div className='content'>
        {
          appointments.map((app, key) => (
            <Appointment onClick={e => sendApointementRequest(app)} key={key} date={app.date} hour={app.hour} duration={app.duration} taken={app.taken} />
          ))
        }
      </div>
      <style jsx>{`
        .title {
          font-size: 25px;
          font-weight: bold;
          color: #272727;
        }

        .card {
          width: 100%;
          padding: 20px;
          background-color: white;
          box-shadow: 0px 0px 25px 0px #ccc;
        }

        .content {
          max-width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}

const Appointments = (expert) => {
  return (
    <div>
      <Nav pageName="Appointments"/>
      <ExpertInfo user={{ username: 'Jean-Michel Pastaga', image: 'https://picsum.photos/100' }} />
      <div className='content'>
        <ExpertAppointments appointments={expert.appointments} />
      </div>
      <Footer />
      <style jsx>{`
        .content {
            display: flex;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
        }

        p {
            color: black;
            text-align: center;
        }
      `}</style>
    </div>
  )
}

Appointments.getInitialProps = (ctx) => {
  const expert = {
    username: 'Jean Michel Pastaga',
    image: 'https://picsum.photos/100',
    appointments: [
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: false },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: false },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: false },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: false },
      { date: '14 Janvier 2020', hour: '17h30', duration: '30min', taken: true },
      { date: '17 Janvier 2020', hour: '15h00', duration: '45min', taken: true }
    ],
  };

  return expert;
}

export default withApollo(Appointments)
