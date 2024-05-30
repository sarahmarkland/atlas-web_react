// CONNECTORS & PROVIDERS - TASK 0
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.isLoggedIn,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, html: { __html: getLatestNotification() }, type: 'urgent'}
      ]
    };

      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
      this.handleHideDrawer = this.handleHideDrawer.bind(this);
      this.logIn = this.logIn.bind(this);
      this.logOut = this.logOut.bind(this);
      this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    console.log('Display drawer');
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    console.log('Hide drawer');
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
    console.log('User logged out');
  };

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id),
    }));
  }

  render() {
    const { displayDrawer, user } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut, logIn: this.logIn }}>
        <Notifications
        displayDrawer={displayDrawer}
        listNotifications={this.state.listNotifications}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
        markNotificationAsRead={this.markNotificationAsRead}
      />
        <div className={css(styles.App)}>
          <Header />
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login logIn={this.logIn}/>
          </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Praesent eleifend, justo eget tristique placerat, lorem felis semper nibh, eu lacinia lectus odio sit amet diam. Ut suscipit sollicitudin magna, sed fermentum ante vestibulum ac. Mauris non ex sem. Morbi finibus, lorem id placerat ullamcorper, nunc metus suscipit nisl, eget dignissim turpis lorem a justo. Suspendisse in rutrum metus. In nec ornare mi. Praesent a metus nec libero mollis facilisis.
            </p>
          </BodySection>
          <hr className={css(styles.hr)} />
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'sans-serif',
  },
  
  App: {
    textAlign: 'center',
  },
  
  bodyText: {
    marginTop: '3rem',
    marginLeft: '2rem',
  },

  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    borderTop: '3px solid #FF0000',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  hr: {
    height: '2px',
    backgroundColor: 'red',
    // margin: '20px 0',
  },
});

export default connect(mapStateToProps)(App);
