import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Router';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
