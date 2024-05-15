import React from 'react';
import logo from '../assets/holbie_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <>
            <header className={css(styles.header)}>
            <img src={logo} className={css(styles.logo)} alt="logo" />
            <h1 className={css(styles.heading)}>School dashboard</h1>
            </header>
            <hr className={css(styles.hr)} />
        </>
    );
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
});

export default Header;
