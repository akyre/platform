import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import DevList from '../components/dev_list'
import { withApollo } from '../lib/apollo'

const Expert = () => {
  return (
    <div>
      <Nav pageName="Choose an Expert"/>
        <div className="devlist">
            <DevList title="Développeurs logiciels" devs={[
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            ]}>
            </DevList>
        </div>
        <div className="devlist">
            <DevList title="Développeurs logiciels" devs={[
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            ]}>
            </DevList>
        </div>
        <div className="devlist">
            <DevList title="Développeurs logiciels" devs={[
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            {name: "Paul", price: "14", note: "4"},
            ]}>
            </DevList>
        </div>
        <Footer />
      <style jsx>{`

        .devlist {
            margin-top: 20px;
            margin-bottom: 20px;
        }

      `}</style>
    </div>
  )
}

export default withApollo(Expert)