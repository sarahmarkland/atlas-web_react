import React, { Component } from 'react';
import logo from '../assets/holbie_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends Component {
    static contextType = AppContext;

    render() {
        const { user, logOut } = this.context;
        return (
            <>
                <header className={css(styles.header)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1 className={css(styles.heading)}>School dashboard</h1>
                </header>
                <hr className={css(styles.hr)} />
                {user.isLoggedIn && (
                    <div id="logoutSection" className={css(styles.logoutSection)}>
                        Welcome {user.email} (<a href="#logout" onClick={logOut}>logout</a>)
                    </div>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
    },
    heading: {
        color: 'red',
    },
    hr: {
        height: '2px',
        backgroundColor: 'red',
    },
    logo: {
        height: '250px',
        pointerEvents: 'none',
    },
    logoutSection: {
        margin: '10px 0',
    }
});

export default Header;
