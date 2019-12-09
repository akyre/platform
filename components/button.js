import React from 'react';

const Button = ({ onClick, color = '#1aa7ff', background = 'white', border = '#1aa7ff', children }) => (
  <button onClick={onClick}>
    {children}
    <style jsx>{`
      button {
        font-family: Roboto;
        padding: 8px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 25px;
        text-decoration: none;
        font-weigth: bold;
        background: ${background};
        border: 3px solid ${border};
        color: ${color};
        border-radius: 10px;
        transition: ease;
        transition-duration: 0.2s;
      }
      button:hover {
        background: ${color};
        color: ${background || 'white'};
        border-color: ${background || 'white'}
      }
    `}</style>
  </button>
)

export default Button;
