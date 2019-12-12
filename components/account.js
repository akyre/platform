import React from 'react';

const Account = ({username, signout}) => (
  <div>
    <a className="link" href="/dashboard">{username.name}</a>
    <a className="link" onClick={signout}>Deconnection</a>
    <style jsx>{`
        .link {
            color: #fff;
            text-decoration: none;
            font-style: italic;
            font-weight: 300;
            font-size: 18px;
            margin-left: 20px;
            margin-right: 20px;
            display: flex;
        }

        .link:hover {
            text-decoration: underline;
        }
    `}</style>
  </div>
)

export default Account;