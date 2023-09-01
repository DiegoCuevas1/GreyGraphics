import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import NavComponent from './NavComponent';
import Portfolio from './Portfolio';
import PrintingQuote from './PrintingQuote';
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='spacer'></div>
        <NavComponent />
        <Routes>
          <Route path="/" Component={Portfolio} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/printing" Component={PrintingQuote} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
