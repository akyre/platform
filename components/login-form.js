import React from 'react'

const LoginForm = ({ value, label, onChange, type = 'text', width = '100%', placeholder }) => {
  return (
    <div id="box">
      {label &&
        <label>
          {label}
        </label>
      }
      <input type={type} value={value} placeholder={placeholder} />

      <style jsx>{`
        #box {
          font-family: Roboto;
          width: ${width};
          font-size: 15px;
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 5px;
          font-size: 15px;
          font-weight: bold;
        }
        input {
          padding-right: 20px;
          padding-left: 20px;
          font-size: inherit;
          border: 0px;
          box-shadow: 0px 0px 15px #00000029;
          height: 35px;
          border-radius: 10px;
          margin-bottom: 15px;
          transition: ease all 0.3s;
        }
        input:focus {
          box-shadow: 0px 0px 15px #00000050;
        }
      `}</style>
    </div>
  )
}

export default LoginForm;
