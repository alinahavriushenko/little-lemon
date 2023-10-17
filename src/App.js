import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './assets/components/Header'
import Main from'./assets/components/Main'
import Footer from './assets/components/Footer'
import Home from './pages/Home';


function App() {

  return (
        <Router>
      <Header />
      <Main />
      <Home />
      <Footer />
        </Router>

  );
}

export default App;
