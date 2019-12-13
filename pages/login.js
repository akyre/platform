import React from 'react'
import Nav from '../components/nav'
import TextField from '../components/text-field'
import ImagedButton from '../components/imaged-button'
import Footer from '../components/footer'
import userRequests from '../graphql/user'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { withApollo } from '../lib/apollo'

const Login = () => {
  let input = {email: '', password: ''};
  const [login] = useMutation(userRequests.login);
  const client = useApolloClient();

  const handleSubmit = e => {
    login({variables: {
      email: input.email.value,
      password: input.password.value}})
      .then(res => {
        document.cookie = cookie.serialize('token', res.data.signup.token, {
          sameSite: false,
          path: '/',
          maxAge: 24 * 60 * 60,
        })

        client.cache.reset().then(() => {
          redirect({}, '/')
        })
      })
      .catch(err => alert('Connexion echoue ${err}'));
    input = {email: "", password: ""};
    e.preventDefault();
  }

  return (
    <div className="loginPage">

      <Nav pageName="Login"/>

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

        <form onSubmit={handleSubmit}>
          <TextField placeholder='Email' ref={ node => {input.email = node}}/>
          <TextField type='password' placeholder='Password' ref={node => {input.password = node}}/>
          <div id="button-container">
            <button type="submit" className="button">Soumettre</button>
          </div>
        </form>
      </div>

      <Footer />

      <style jsx>{`
        .loginPage {
          width:100%;
          background-color: white;
        }

        .signInWith {
          font-size: 18px;
          color:#333;
          text-align: center;
          padding-top: 3%;
        }

        .loginForm {
          margin-top:5%;
          margin-bottom:5%;
          margin-left: 20%;
          margin-right: 20%;
          border-radius: 25px;
          box-shadow: 0px 0px 15px #00000029;
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
          margin-bottom: 30px;
        }

        form {
          margin-left: 5%;
          margin-right: 5%;
        }
      `}</style>
    </div>
  )
}

export default withApollo(Login)
