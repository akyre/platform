import React from 'react'
import Nav from '../components/nav'
import TextField from '../components/text-field'
import ImagedButton from '../components/imaged-button'
import Footer from '../components/footer'
import {withApollo} from "../lib/apollo";
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Router from 'next/router'
import redirect from '../lib/redirect'

const ADD_USER = gql`
  mutation SignUp($email: String!, $name: String!, $surname: String!, $password: String!, $phone: String!) {
    signup(data: {email: $email, name: $name, surname: $surname, password: $password, phone: $phone}) {
      token
    }
  }
`

const Register = (props) => {
  let input = {email: "", firstname: "", lastname: "", password: "", phone: ""};
  const [signup, {data, loading, error}] = useMutation(ADD_USER);

  const onSubmit = e => {
    e.preventDefault();
    const res = signup({variables: {
      email: input.email.value,
      name: input.firstname.value,
      surname: input.lastname.value,
      password: input.password.value,
      phone: input.phone.value}});
    input = {email: "", firstname: "", lastname: "", password: "", phone: ""};
  }

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
                <a className="existing-account-font" href="/login">Already has an account</a>
            </div>
        </div>

        {error && <div id="error"><p>Cannot register !</p></div>}
        <form onSubmit={onSubmit}>
          <TextField placeholder='Nom' ref={ node => {input.lastname = node}}/>
          <TextField placeholder='Prénom' ref={ node => {input.firstname = node}}/>
          <TextField placeholder='Mail' ref={ node => {input.email = node}}/>
          <TextField type='password' placeholder='Mot de passe' ref={ node => {input.password = node}}/>
          <TextField type='password' placeholder='Confirmation mot de passe' ref={ node => {input.confirmPassword = node}}/>
          <TextField placeholder='Téléphone' ref={ node => {input.phone = node}}/>
          <button type="submit" className="button">Soumettre</button>
        </form>
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
        
        .button {
          border-radius: 10px;
          background-color: #1aa7ff;
          border: none;
          color: black;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          width: 45%;
          height: 60px;
          cursor: pointer;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 20px;
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 5%;
          margin-right: 5%;
        }

        #error {
          text-align: center;
          color: red;
        }
      `}</style>
    </div>
  )
};

export default withApollo(Register)

