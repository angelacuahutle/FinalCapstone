import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './nav-bar';
import Things from './things';
import '../styles/index.css'

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route
        exact
        path="/"
        element={(
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
        )}
      />
      <Route path="/things" element={<Things />} />
    </Routes>
  </Router>
);

export default App;
