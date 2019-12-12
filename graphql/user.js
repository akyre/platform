import gql from 'graphql-tag'

const me = gql`{
    me {
        email,
        name,
        surname,
        phone,
        userType,
        isExpert,
        price,
        note,
    }
}`

const add_user = gql`
  mutation SignUp($email: String!, $name: String!, $surname: String!, $password: String!, $phone: String!) {
    signup(data: {email: $email, name: $name, surname: $surname, password: $password, phone: $phone}) {
      token
    }
  }
`

const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: {email: $email, password: $password}) {
        token
    }
  }
`

export default {
    me,
    add_user,
    login,
}