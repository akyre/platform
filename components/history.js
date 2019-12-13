import React from 'react'
import HistoryCard from './history-card'

const History = ({ history }) => {
  return (
    <div id='content'>
      <div id='title'>Historique</div>
      <div id='history'>
        {history.map(card => <HistoryCard />)}
      </div>
      <style jsx>{`
        #history {
          display: flex;
          overflow-x: scroll;
        }

        #content {
          box-sizing: border-box;
          background: #fff;
          box-shadow: 0px 0px 15px #00000029;
          padding: 20px;
          width: 90%;
          border-radius: 25px;
          margin: 20px;
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

export default History
