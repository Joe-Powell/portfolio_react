import React from 'react';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Footer from './components/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/style.css';


function App() {

  return (
    <div className="App">
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />


    </div>
  );
}

export default App;
