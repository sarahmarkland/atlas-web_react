import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/uiActionCreators'; // Adjust the import path as necessary
import logo from '../assets/holbie_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

class Header extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        const { user } = this.props;
        return (
            <>
                <header className={css(styles.header)}>
                    <img src={logo} className={css(styles.logo)} alt="logo" />
                    <h1 className={css(styles.heading)}>School dashboard</h1>
                </header>
                <hr className={css(styles.hr)} />
                {user.isLoggedIn && (
                    <div id="logoutSection" className={css(styles.logoutSection)}>
                        Welcome {user.email} (<a href="#logout" onClick={this.handleLogout}>logout</a>)
                    </div>
                )}
            </>
        );
    }
}

Header.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool,
    }),
    logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
    user: {
        email: '',
        isLoggedIn: false,
    },
};

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

const mapStateToProps = (state) => ({
    user: state.ui.get('user').toJS(), // Adjust according to your state structure
});

const mapDispatchToProps = (dispatch) => ({
    logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
