import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import NavComponent from './NavComponent';
import Portfolio from './Portfolio';
import PrintingQuote from './PrintingQuote';
import DesignQuote from './DesignQuote';
import Services from './Services';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavComponent />
        <Routes>
          <Route path="/" Component={Portfolio} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/printing" Component={PrintingQuote} />
          <Route path="/design" Component={DesignQuote} />
          <Route path="/services" Component={Services} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
