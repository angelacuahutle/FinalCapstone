import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './nav-bar';
import Thing from './things';
import App from '../components/app';
import './../styles/index.css';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<div>Index page</div>} />
      <Route
        exact
        path='/'
        element={
          <h2 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              backgroundColor: 'lightgray',
              margin: 0,
            }}
          >
            Welcome to Greeting App!
          </h2>
        }
      />
      <Route path='/things' element={<Thing />} />
    </Routes>
  </Router>
);
export default App;