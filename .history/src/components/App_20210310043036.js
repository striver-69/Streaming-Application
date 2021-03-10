import React from 'react'
import {BrowserRouter, Route,Link} from 'react-router-dom'

const pageOne=()=>{
  return <div>
    Pageone
    <Link to="/pagetwo">navigate to page two</Link>
  </div>
}
const pageTwo=()=>{
  return <div>
    PageTwo
    <Link to="/">navigat eto page one</Link>
  </div>
}


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={pageOne}/>
        <Route path="/pagetwo" component={pageTwo}/>
      </BrowserRouter>
    </div>
  )
}
