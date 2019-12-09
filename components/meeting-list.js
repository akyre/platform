import MeetingCard from '../components/meetingCard'

const MeetingList = ({ meetings }) => {
  return (
    <div id='content'>
      <div id='title'>Meetings</div>
      <div id='meetings'>
        { meetings.map(meeting => <MeetingCard />) }
      </div>
      <style jsx>{`
        #meetings {
          display: flex;
          flex-direction: column;
          max-height: 500px;
          overflow-y: scroll;
        }

        #content {
          margin-right: 10px;
          background: #fff;
          box-shadow: 0px 0px 15px #00000029;
          padding: 20px;
          width: 90%;
          border-radius: 25px;
        }

        #title {
          color: #000;
          font-weight: bold;
          font-size: 40px;
        }
      `}</style>
    </div>
  )
}

export default MeetingList;
