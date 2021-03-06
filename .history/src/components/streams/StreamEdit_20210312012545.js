import React from 'react'
import {connect} from 'react-redux'
import {fetchStream, editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit= (formvalues)=>{
    console.log(formValues)
  }

  render(){
    console.log(this.props)
    if(!this.props.stream){
      return <div>Loading</div>
    }

    return <div>{this.props.stream.title}</div>
  }
  
}

const mapStateToProps=(state,ownProps)=>{
  return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(StreamEdit)