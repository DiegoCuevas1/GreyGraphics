import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import NavComponent from './NavComponent';
import Portfolio from './Portfolio';
import Quote from './PrintingQuote';
function App() {
  return (
    <Router>
      <div>
        <NavComponent />
        <Routes>
          <Route path="/" Component={Portfolio} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/quote" Component={Quote} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
