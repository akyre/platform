import React from 'react'

const HistoryCard = ({}) => {
  return (
    <div>
      <p>name</p>
      <p>project</p>
      <p>techno</p>
      <p>duration</p>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          background: #1aa7ff;
          border-radius: 24px;
          margin: 20px;
          min-width: 200px;
          height: 200px;
          padding: 10px;
          flex-basis: max-content;
        }
      `}</style>
    </div>
  )
}

export default HistoryCard
