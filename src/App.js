import logo from './logo.svg';
import './App.css';
import React from 'react';
import Map from './Map';
import BasemapSwitcher from './BasemapSwitcher';

const App = () => {
  return (
    <div className="app">
      <Map />
      <BasemapSwitcher />
    </div>
  );
};

export default App;



