import React from 'react'
// import Head from 'next/head'
import Nav from '../components/nav'
// import TextField from '../components/text-field'
import Footer from '../components/footer'
import LoginForm from '../components/login-form'

const Login = () => {
  return (
    <div className="loginPage">

      <Nav />

      <div className="loginForm">

        <div className="signs">
          <h2 className="signInWith">
            Sign in with:
          </h2>
          <div className="sign1">
            <div className="google">
              <img className="google" src="btn_google_light_normal_ios.svg" width="100%"/>
             </div>
            <h2 style={{color:"#333", 'font-size': "18px"}}>Google</h2>
          </div>
          <div className="sign2">
            <div className="github">
              <img className="github" src="GitHub-Mark-120px-plus.png" width="100%"/>
            </div>
            <h2 style={{color:"#333", 'font-size': "18px"}}>Github</h2>
          </div>
        </div>

        <div>
            <div className="creation">
              <h1 className="creation-font">Création du compte</h1>
            </div>
            <div className="existing-account">
              <h3>
                <a className="existing-account-font" href="#">Already has an account</a>
              </h3>
            </div>
        </div>

        <form>
          <LoginForm placeholder='Nom' />
          <LoginForm placeholder='Prénom' />
          <LoginForm placeholder='Mail' />
          <LoginForm placeholder='Addresse' />
          <LoginForm type='password' placeholder='Mot de passe' />
          <LoginForm type='password' placeholder='Confirmation mot de passe' />
          <LoginForm placeholder='Téléphone' />
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
          background:white;
        }
        .loginForm {
          margin-top:5%;
          margin-bottom:5%;
          margin-left: 20%;
          margin-right: 20%;
          background:#F0F0F0;
          border-radius: 25px;
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
        .sign1 {
          width: 50%;
          max-width: 50%;
          display:flex;
          flex-direction: row;
          display: inline-block;
          text-align:center;
        }
        .google {
          cursor: pointer;
          width:60px;
          height:60px;
          display: inline-block;
        }
        .sign2 {
          width: 50%;
          max-width: 50%;
          display:flex;
          flex-direction: row;
          display: inline-block;
          text-align:center;
        }
        .github {
          cursor: pointer;
          width:60px;
          height:60px;
          display: inline-block;
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
      `}</style>
    </div>
  )
}

export default Login
