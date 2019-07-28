import React from 'react';
//import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';
import MainComponent from './component/MainComponent.jsx';

function App() {
  return (
    <div className="App">      
      <MainComponent/>
    </div>
  );
}

//export default App;

export default connect()(App);