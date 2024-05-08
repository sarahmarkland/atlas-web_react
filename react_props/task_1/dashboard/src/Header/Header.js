import React from 'react';
import logo from '../assets/holbie_logo.jpg';
import './Header.css';

function Header() {
    return (
        <>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
            </header>
            <hr></hr>
        </>
    );
}

export default Header;
