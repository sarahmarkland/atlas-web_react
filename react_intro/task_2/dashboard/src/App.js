import React from 'react';
import logo from './holbie_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <div className='App-body'>
        <div className="body-content">
          <p className='body-text'>Login to access the full dashboard</p>
          <div className="form-group">
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' type="email" id="email" />
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' type="password" id="password" />
          </div>
          <button className='OK-button'>OK</button>
        </div>
      </div>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
