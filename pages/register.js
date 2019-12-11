import React from 'react'
import Nav from '../components/nav'
import TextField from '../components/text-field'
import ImagedButton from '../components/imaged-button'
import Footer from '../components/footer'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const ADD_USER = gql`
`

const Register = () => {
  return (
    <div className="loginPage">

      <Nav pageName="Register"/>

      <div className="loginForm">

        <div className="signs">
          <h2 className="signInWith">
            Sign in with:
          </h2>
          <div id="oauth-sign">
            <ImagedButton image="/btn_google_light_normal_ios.svg">Sign in with Google</ImagedButton>
            <ImagedButton image="/Github-Mark-120px-plus.png">Sign in with Github</ImagedButton>
          </div>
        </div>
        <div>
            <div className="creation">
              <h1 className="creation-font">Création du compte</h1>
            </div>
            <div className="existing-account">
              <h3>
                <a className="existing-account-font" href="/login">Already has an account</a>
              </h3>
            </div>
        </div>

        <form>
          <TextField placeholder='Nom' />
          <TextField placeholder='Prénom' />
          <TextField placeholder='Mail' />
          <TextField type='password' placeholder='Mot de passe' />
          <TextField type='password' placeholder='Confirmation mot de passe' />
          <TextField placeholder='Téléphone' />
        </form>

        <div id="button-container">
          <input type="button" className="button" value="Soumettre"></input>
        </div>

      </div>

      <Footer />

      <style jsx>{`
        .signInWith {
          font-size: 18px;
          color:#333;
          text-align: center;
          padding-top: 3%;
        }
        .buttonLogin {
          margin: 100px;
        }
        .loginPage {
          width:100%;
          background-color: white;
        }
        .loginForm {
          margin-top:5%;
          margin-bottom:5%;
          margin-left: 20%;
          margin-right: 20%;
          border-radius: 25px;
          box-shadow: 0px 0px 15px #00000029;
        }
        .creation {
          width: 50%;
          max-width: 50%;
          display:flex;
          flex-direction: row;
          display: inline-block;
          text-align:center;
        }
        .creation-font {
          color: #333;
          font-family: 'Roboto';
          font-size:25px;
          margin-top:5%;
          margin-left:5%;
        }
        .existing-account {
          width: 50%;
          max-width: 50%;
          display:flex;
          flex-direction: row;
          display: inline-block;
        }
        a.existing-account-font:link {
          color: #333;
          font-weight: 6;
          text-decoration: none;
          font-style: italic;
        }
        a.existing-account-font:visited {
          text-decoration: none;
          color: black;
        }
        a.existing-account-font:hover {
          text-decoration: underline;
        }
        #button-container {
          text-align:center;
        }
        .button {
          border-radius: 10px;
          background-color: #1aa7ff;
          border: none;
          color: black;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          margin-bottom: 35px;
          width: 45%;
          height: 60px;
          cursor: pointer;
        }
        .button:hover {
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }

        #oauth-sign {
          margin-left: 5%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        form {
          margin-left: 5%;
          margin-right: 5%;
        }
      `}</style>
    </div>
  )
}

export default Register

