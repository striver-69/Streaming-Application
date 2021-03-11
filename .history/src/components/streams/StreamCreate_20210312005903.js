import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createStream} from '../../actions/index'
import StreamForm from './StreamForm'

export class StreamCreate extends Component {

  onSubmit=(formValues)=>{
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const validate=(formValues)=>{
  const errors={}
  if(!formValues.title){
    errors.title='You must enter a title'
  }
  if(!formValues.description){
    errors.description='you must enter a description'
  }

  return errors
}

const formWrapped= reduxForm({
  form:'streamCreate',
  validate:validate
})(StreamCreate)

export default connect(null,{createStream})(formWrapped)