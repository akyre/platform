import React, { useRef } from 'react'

const TextField = React.forwardRef((props, ref) => {//( value, label, onChange, type = 'text', width = '100%', placeholder , ref) => {
  return (
    <div id="box">
      {props.label &&
        <label>
          {props.label}
        </label>
      }
      <input type={props.type || 'text'} value={props.value} placeholder={props.placeholder} ref={ref}/>
      <style jsx>{`
        #box {
          font-family: Roboto;
          width: ${props.width || "100%"};
          font-size: 20px;
          display: flex;
          flex-direction: column;
        }
        label {
          margin: 15px;
          margin-bottom: 0px;
          font-size: 25px;
          font-weight: bold;
        }
        input {
          font-size: inherit;
          border: 0px;
          padding-right: 20px;
          padding-left: 20px;
          box-shadow: 0px 0px 15px #00000029;
          height: 50px;
          border-radius: 10px;
          margin: 10px;
          margin-top: 0px;
          transition: ease all 0.2s;
        }
        input:focus {
          box-shadow: 0px 0px 15px #00000050;
        }
      `}</style>
    </div>
  )
});

export default TextField;
