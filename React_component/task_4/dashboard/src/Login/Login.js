import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className='App-body'>
        <div className="body-content">
          <p className='body-text'>Login to access the full dashboard</p>
          <div className="form-group">
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' type="email" id="email" />
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' type="password" id="password" />
            <button className='OK-button'>OK</button>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Login;
