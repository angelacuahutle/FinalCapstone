import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, as Route, Routes, Route } from "react-router-dom";
import Greetings from './Greetings';
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Route exact path='/' element={<div>Index page</div>} />
      <Route path='/greetings' element={<Greeting />} />
      </BrowserRouter>
    );
  }
}

export default App
