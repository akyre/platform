import React from 'react';

const ImagedButton = ({ onClick, color = 'black', background = 'white', image, m, p, children }) => (
  <button onClick={onClick}>
      <div id="image-container">
        <img src={image}/>
      </div>
      <p>{children}</p>
    <style jsx>{`
      button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: Roboto;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 15px;
        text-decoration: none;
        font-weigth: bold;
        background: ${background};
        color: ${color};
        border-radius: 10px;
        border: none;
        transition: ease;
        transition-duration: 0.2s;
        box-shadow: 0px 0px 15px #00000029;
        height: 50px;
      }

      button:hover {
        background: ${color};
        color: ${background || 'white'};
        border-color: ${background || 'white'}
      }

      #image-container {
        margin-top: auto;
        margin-bottom: auto;
        width: 25px;
        height: 25px;
      }

      img {
          width: 100%;
          height: 100%:
      }

      p {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 10px;
      }
    `}</style>
  </button>
)

export default ImagedButton;
