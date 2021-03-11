import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'

export class StreamCreate extends Component {
  render() {
    return (
      <div>
        stream StreamCreate
      </div>
    )
  }
}

export default reduxForm({
  form:'streamCreate'
})(StreamCreate)
