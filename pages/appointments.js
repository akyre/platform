import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import ExpertCard from '../components/expert_card'
import Calendar from 'rc-calendar'
import moment from 'moment'
import MeetingList from '../components/meeting-list'

const ExpertInfo = ({ user  }) => (
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

const AkyreCalendar = ({ date }) => {
    const [ iDate, setDate ] = React.useState('')

    return (
        <div className='calendar'>
            <Calendar
                style={{ fontSize: '40px' }}
                dateInputPlaceholder="Choissisez une date"
                onChange={e => {
                    setDate(JSON.stringify(e._d).split('T')[0])
                }}
            />
            <style jsx>{`
                .rc-calendar-column-header {
                    margin: 20px;
                }

                p {
                    color: white;
                }

                .calendar {
                    padding: 20px;
                    box-shadow: 0px 0px 15px #00000029;
                    border-radius: 25px;
                    background-color: #1aa7ff;
                    height: 500px;
                    width: 60%;
                    margin: 20px;
                }
            `}</style>
        </div>
    )
}

const AkyreTimeSelector = ({ date }) => {
    return (
        <div className='content'>
            <style jsx>{`
            .content {
                display: flex;
                box-shadow: 0px 0px 15px #00000029;
                flex-grow: 1;
                background-color: #fff;
                margin: 20px;
                border-radius: 25px;

            }
            `}</style>
        </div>
    )
}

const Appointments = () => {
  return (
    <div>
      <Nav pageName="Appointments"/>
      <ExpertInfo user={{ username: 'Jean-Michel Pastaga', image: 'https://picsum.photos/100'  }} />
      <div className='content'>
        <AkyreCalendar />
        <MeetingList meetings={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </div>
      <Footer />
      <style jsx>{`
        .content {
            max-height: 600px;
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

export default Appointments
