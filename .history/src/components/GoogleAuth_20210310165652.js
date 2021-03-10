import React, { Component } from 'react'

export class GoogleAuth extends Component {
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'402777915004-5l5ibpbmbqui0dtv8q79a38sqk6ugjc4.apps.googleusercontent.com',
        scope:'email'
      })
    })
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    )
  }
}

export default GoogleAuth
