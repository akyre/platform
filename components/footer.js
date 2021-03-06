import React from 'react';

const list = [
  ['Products', 'Code Review', 'Peer Coding', 'Benchmarking', 'Analytics'],
  ['Company', 'About us', 'Management', 'News Room', 'Contact us'],
  ['Resources', 'Github', 'Gitlab', 'Bit Bucket', 'Nebulis']
]

const Footer = () => (
  <div id="footer">
    <img src="thin_logo.svg" id="image" />
    <div id="content">
      {list.map(content => (
        <ul key={'footer-ul' + content[0]}>
          <li key={'footer-key' + content[0]} className="li-title">{content[0]}</li>
          {content.map(function (elem, index) {
            if (index != 0) {
              return (
              <li key={'footer-key' + elem} className="li-elem">
                <a>{elem}</a>
              </li>
              );
            }
          })}
        </ul>
      ))
      }
    </div>
    <style jsx>{`
    #content {
      display: flex;
      flex-grow: 1;
      justify-content: start;
    }

    #image {
      width: 70px;
      align-self: start;
      margin: 20px;
    }

    ul {
      list-style-type: none;
      margin-left: 40px;
      margin-right: 40px;
      padding: 0px;
      font-size: 13px;
      width: 100px;
    }

    .li-elem {
      font-weight: lighter;
    }

    .li-title {
      font-weigth: bold;
      margin: 5px;
    }

    #footer {
      padding-left: 100px;
      padding-right: 100px;
      display: flex;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #272727;
      text-align: center;
      height: 150px;
      align-items: center;
    }

    a {
      text-style: none;
    }

    a:hover {
      font-weight: 300;
    }
    `}</style>
  </div>
)

export default Footer;
